import { useEffect, useState } from 'react';
import * as S from './LostUpload.styles';
import { useLayoutStore } from '@/stores/useLayoutStore';
import CheckIcon from '@/assets/icons/check.svg?react';
import { Description, ImageSection, ModalCaution, Title } from '@/features/lost';
import { theme } from '@/styles/theme';
import { NavBar } from '@/components/nav-bar';
import { BlueButton } from '@/components/bluebuttons';
import TimeSelect from '@/features/lost/components/upload/TimeSelect';
import useModal from '@/hooks/useModal';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '@/stores/useModalStore';
import { axiosInstance } from '@/lib';

/**
 * 분실물 등록 페이지
 * @returns {JSX.Element}
 */

export default function LostUpload() {
  const navigate = useNavigate();
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const [formState, setFormState] = useState({
    selectedDay: '1일차', //날짜 선택 변수
    selectOpen: false, //시간 height값 변수 여부
    name: '', //분실물 이름 변수
    location: '', //습득 장소 변수
    isDeliveredToStaff: false, //스태프 전달 여부
    description: '', //분실물 설명 변수
    image: null as File | null, //분실물 이미지 파일 변수
    time: '16:00 - 18:00', //습득 시간 변수
    checked: false, //체크박스 체크 여부 변수
  });
  const { open, key } = useModal(ModalCaution);
  const closeModal = useModalStore((state) => state.closeModal);
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  const updateForm = <K extends keyof typeof formState>(key: K, value: (typeof formState)[K]) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddClick = () => {
    open(
      {
        title: '분실물 등록 숙지 사항',
        onConfirm: async () => {
          closeModal({ key, clearTime: 200 });
          const formData = new FormData();

          if (formState.image) {
            formData.append('image', formState.image);
          }

          const dataPayload = {
            name: formState.name,
            description: formState.description,
            staffNotified: formState.isDeliveredToStaff,
            foundLocation: formState.location,
            foundDate: formState.selectedDay,
            foundTime: formState.time,
          };

          const jsonBlob = new Blob([JSON.stringify(dataPayload)], { type: 'application/json' });

          formData.append('data', jsonBlob);
          formData.append('image', formState.image!);

          try {
            await axiosInstance.post('/api/lost-items', formData, {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': undefined,
              },
            });
            navigate('/main/lost/upload/complete');
          } catch {
            navigate('/main/lost/upload/fail');
          }
        },
      },
      {
        isHelpIcon: false,
      },
    );
  };

  return (
    <>
      <NavBar isBack={true} title="분실물 등록하기" />
      <S.Container>
        <S.InputContainer>
          <S.InputWrap>
            {/* 이미지 */}
            <ImageSection image={formState.image} setImage={(file) => updateForm('image', file)} />
            {/* 이름 */}
            <S.NameBox>
              <Title title="분실물 이름" />
              <S.Input
                placeholder="ex) 학생증, 후드집업 (최대 20자)"
                maxLength={20}
                onChange={(e) => updateForm('name', e.target.value)}
              />
            </S.NameBox>
            {/* 스태프 전달 여부 */}
            <S.StaffBox>
              <Title title="스태프 전달 여부" />
              <S.StaffButton
                onClick={() => updateForm('isDeliveredToStaff', !formState.isDeliveredToStaff)}
                $active={formState.isDeliveredToStaff}
              >
                <S.StaffButtonText $active={formState.isDeliveredToStaff}>
                  {formState.isDeliveredToStaff ? '전달 완료' : '전달 안함'}
                </S.StaffButtonText>
                <CheckIcon width={'1rem'} height={'1rem'} fill={theme.colors.grayScale.white} />
              </S.StaffButton>
            </S.StaffBox>
            {/* 위치 */}
            <S.LocationBox>
              <Title title="습득 장소" />
              <S.Input
                placeholder="ex) 대운동장, 제 1공학관 앞 (최대 20자)"
                maxLength={20}
                onChange={(e) => updateForm('location', e.target.value)}
              />
            </S.LocationBox>
            {/* 시간 */}
            <TimeSelect
              selectedDay={formState.selectedDay}
              setSelectedDay={(val) => updateForm('selectedDay', val)}
              time={formState.time}
              setTime={(val) => updateForm('time', val)}
              selectOpen={formState.selectOpen}
              setSelectOpen={(val) => updateForm('selectOpen', val)}
            />
            {/* 설명 */}
            <S.DescriptionBox>
              <Title title="물건 설명" />
              <S.DescriptionInput
                placeholder={`분실물에 대한 자세한 설명이 필요하다면\n적어주세요. (최대 100자)`}
                maxLength={100}
                onChange={(e) => updateForm('description', e.target.value)}
              />
              <Description text="* 축제와 무관한 내용이나 동일 정보의 반복 등 부적절한 내용은 삭제될 수 있습니다." />
            </S.DescriptionBox>
          </S.InputWrap>
          <S.CheckWrap>
            <S.CheckText>
              HyLight 웹앱은 분실물 회수를 원활하게 돕기 위해 정보를 제공하고 있으며, 분실물의
              보관이나 수령과 관련된 책임은 지지 않습니다.
            </S.CheckText>
            <S.Icon
              $checked={formState.checked}
              onClick={() => updateForm('checked', !formState.checked)}
              style={{
                color: formState.checked
                  ? theme.colors.grayScale.black
                  : theme.colors.grayScale.gy400,
              }}
            >
              <CheckIcon width="2.0625rem" height="2.0625rem" />
            </S.Icon>
          </S.CheckWrap>
        </S.InputContainer>
        <BlueButton
          label="작성 완료"
          size="large-header"
          disabled={
            !(
              formState.image &&
              formState.name &&
              formState.location &&
              formState.selectedDay &&
              formState.time &&
              formState.description &&
              formState.checked
            )
          }
          onClick={handleAddClick}
        />
      </S.Container>
    </>
  );
}
