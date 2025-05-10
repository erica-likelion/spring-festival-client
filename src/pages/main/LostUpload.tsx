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

export default function LostUpload() {
  const navigate = useNavigate();
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const [selectedDay, setSelectedDay] = useState<string>('1일차');
  const [selectOpen, setSelectOpen] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isDeliveredToStaff, setIsDeliveredToStaff] = useState(false);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [time, setTime] = useState<string>('16:00 - 18:00');
  const [checked, setChecked] = useState(false);
  const toggleCheck = () => setChecked((prev) => !prev);
  const { open, key } = useModal(ModalCaution);
  const closeModal = useModalStore((state) => state.closeModal);

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  const handleAddClick = () => {
    open(
      {
        title: '분실물 등록 숙지 사항',
        onConfirm: () => {
          closeModal({ key, clearTime: 200 });
          navigate('/main/lost/upload/complete');
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
            <ImageSection image={image} setImage={setImage} />
            {/* 이름 */}
            <S.NameBox>
              <Title title="분실물 이름" />
              <S.Input
                placeholder="ex) 학생증, 후드집업 (최대 20자)"
                maxLength={20}
                onChange={(e) => setName(e.target.value)}
              />
            </S.NameBox>
            {/* 스태프 전달 여부 */}
            <S.StaffBox>
              <Title title="스태프 전달 여부" />
              <S.StaffButton
                onClick={() => setIsDeliveredToStaff((prev) => !prev)}
                $active={isDeliveredToStaff}
              >
                <S.StaffButtonText $active={isDeliveredToStaff}>
                  {isDeliveredToStaff ? '전달 완료' : '전달 안함'}
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
                onChange={(e) => setLocation(e.target.value)}
              />
            </S.LocationBox>
            {/* 시간 */}
            <TimeSelect
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              time={time}
              setTime={setTime}
              selectOpen={selectOpen}
              setSelectOpen={setSelectOpen}
            />
            {/* 설명 */}
            <S.DescriptionBox>
              <Title title="물건 설명" />
              <S.DescriptionInput
                placeholder="ex) 분실물에 대한 자세한 설명이 필요하다면 적어주세요! (최대 100자)"
                maxLength={100}
                onChange={(e) => setDescription(e.target.value)}
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
              $checked={checked}
              onClick={toggleCheck}
              style={{
                color: checked ? theme.colors.grayScale.black : theme.colors.grayScale.gy400,
              }}
            >
              <CheckIcon width="2.0625rem" height="2.0625rem" />
            </S.Icon>
          </S.CheckWrap>
        </S.InputContainer>
        <BlueButton
          label="작성 완료"
          size="large-header"
          disabled={!(image && name && location && selectedDay && time && description && checked)}
          onClick={handleAddClick}
        />
      </S.Container>
    </>
  );
}
