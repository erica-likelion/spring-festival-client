/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import * as S from './LostUpload.styles';
import { useLayoutStore } from '@/stores/useLayoutStore';
import CameraIcon from '@/assets/icons/nrk_camera.svg?react';
import CheckIcon from '@/assets/icons/check.svg?react';
import { Description, Title } from '@/features/lost';
import { theme } from '@/styles/theme';
import { NavBar } from '@/components/nav-bar';
import { Tabs } from '@/components/tabs';
import { BlueButton } from '@/components/bluebuttons';

export default function LostUpload() {
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
  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  return (
    <>
      <NavBar isBack={true} title="분실물 등록하기" />
      <S.Container>
        <S.InputContainer>
          <S.InputWrap>
            {/* 이미지 */}
            <S.ImageBox>
              <Title title="분실물 사진" />
              <S.ImageButton>
                <CameraIcon width={'1.5rem'} height={'1.5rem'} fill={theme.colors.grayScale.gy50} />
                <S.ImageButtonText>이미지 업로드 (1장)</S.ImageButtonText>
              </S.ImageButton>
              <S.CommentBox>
                <Description
                  text={`* 잘 알아볼 수 있도록 밝은 곳에서 전체 모습이 나오게 촬영한 
                    이미지를 올려주세요.`}
                />
                <Description text="* 이미지에 민감한 개인정보가 포함되어 있다면 가려서 업로드해주세요!" />
              </S.CommentBox>
            </S.ImageBox>
            {/* 이름 */}
            <S.NameBox>
              <Title title="분실물 이름" />
              <S.Input
                placeholder="ex) 학생증, 후드집업 (최대 20자)"
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
                onChange={(e) => setLocation(e.target.value)}
              />
            </S.LocationBox>
            {/* 시간 */}
            <S.TimeBox>
              <Title title="습득 시간" />
              <S.DayTimeBox>
                <S.DayButton>
                  <S.DayTimeText>습득 일자</S.DayTimeText>
                  <Tabs
                    tabs={['1일차', '2일차', '3일차']}
                    activeTab={selectedDay}
                    onTabClick={(tabs) => setSelectedDay(tabs)}
                  />
                </S.DayButton>
                <S.TimeSelect>
                  <S.DayTimeText>습득 시간</S.DayTimeText>
                  <S.TimeSelectBox>
                    <S.TimeSelectOption>16:00 - 18:00</S.TimeSelectOption>
                    <S.ArrowIcon
                      width="1.5rem"
                      height="1.5rem"
                      fill={theme.colors.grayScale.white}
                      onClick={() => setSelectOpen((prev) => !prev)}
                      $rotated={selectOpen}
                    />
                  </S.TimeSelectBox>
                </S.TimeSelect>
              </S.DayTimeBox>
            </S.TimeBox>
            {/* 설명 */}
            <S.DescriptionBox>
              <Title title="물건 설명" />
              <S.DescriptionInput
                placeholder="ex) 분실물에 대한 자세한 설명이 필요하다면 적어주세요! (최대 100자)"
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
          isBigger={true}
          disabled={
            !(
              image &&
              name &&
              isDeliveredToStaff &&
              location &&
              selectedDay &&
              time &&
              description &&
              checked
            )
          }
        />
      </S.Container>
    </>
  );
}
