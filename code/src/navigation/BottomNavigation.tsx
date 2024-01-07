import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MapComponent } from '../screens/map/MapView'
import { SettingsNavigation } from './SettingsNavigation'
import { DefaultTheme, useTheme } from 'styled-components'
import { perfectSize } from '../utils/ScreenSize'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

const Tab = createBottomTabNavigator()

export function BottomNavigator() {
	const theme: DefaultTheme = useTheme()
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: theme.colors.tabBarActiveTint,
				tabBarInactiveTintColor: theme.colors.tabBarInactiveTintColor,
				tabBarStyle: {
					backgroundColor: theme.colors.backgroundApp,
					paddingTop: perfectSize(5),
					paddingBottom: perfectSize(5),
					borderTopWidth: 0,
					height: perfectSize(60)
				},
				tabBarHideOnKeyboard: true,
				headerShown: false,
				tabBarShowLabel: true,
				tabBarLabelStyle: {
					fontSize: perfectSize(13),
					fontStyle: 'normal',
					fontWeight: '500',
					lineHeight: perfectSize(12)
				}
			}}
		>
			<Tab.Screen
				name={'MapComponent'}
				component={MapComponent}
				options={{
					title: 'Карта',
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="map" size={perfectSize(24)} color={color} />
					)
				}}
			/>
			<Tab.Screen
				name={'SettingsComponent'}
				component={SettingsNavigation}
				options={{
					title: 'Настройки',
					tabBarIcon: ({ color }) => (
						<MaterialIcons
							name="settings"
							size={perfectSize(24)}
							color={color}
						/>
					)
				}}
			/>
		</Tab.Navigator>
	)
}
