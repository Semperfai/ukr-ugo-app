const iconNames = ['info', 'pwa'] as const
export type IconName = (typeof iconNames)[number]
export interface Props {
  text: string
  iconName: IconName
}
