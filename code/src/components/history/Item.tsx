import React, { FC } from 'react'
import styled from 'styled-components/native'
import { HistoryItem } from '../../storage/Storage'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../types/navigation'
import { perfectSize } from '../../utils/ScreenSize'
import { Image } from 'expo-image'
import AlertModalService from '../../utils/AlertModalService'
import { StyleSheet } from 'react-native'

export const ItemHistory: FC<HistoryItem> = ({ title, description, cid, file }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <MainContainer onPress={() => navigation.navigate('PhotoPage', { cid })}>
      <Image
        source={{ uri: `https://pastvu.com/_p/d/${file}` }}
        style={s.image}
        onError={() =>
          AlertModalService.infoAlert(
            'Ошибка',
            'Не удалось загрузить изображение, попробуйте позже',
          )
        }
        cachePolicy="disk"
      />
      <InfoContainer>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </InfoContainer>
    </MainContainer>
  )
}

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: ${perfectSize(13)};
  line-height: ${perfectSize(13)};
  color: ${props => props.theme.colors.titleMenuText};
`

export const DescriptionText = styled.Text`
  margin-top: ${perfectSize(5)};
  font-style: normal;
  font-weight: 400;
  font-size: ${perfectSize(12)};
  line-height: ${perfectSize(12)};
  color: ${props => props.theme.colors.MenuDescriptionText};
`

const InfoContainer = styled.View`
  flex: 1;
  margin-left: ${perfectSize(10)};
  margin-bottom: auto;
`

const MainContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: center;
  padding-bottom: ${perfectSize(10)};
`
const s = StyleSheet.create({
  image: {
    width: '25%',
    height: perfectSize(80),
    borderRadius: 20,
  },
})
