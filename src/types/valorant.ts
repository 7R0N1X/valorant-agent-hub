export type APIValorantResponse = {
  status: number;
  data:   Datum[];
}

export type Datum = {
  uuid:                      string;
  displayName:               string;
  description:               string;
  developerName:             string;
  characterTags:             string[] | null;
  displayIcon:               string;
  displayIconSmall:          string;
  bustPortrait:              null | string;
  fullPortrait:              null | string;
  fullPortraitV2:            null | string;
  killfeedPortrait:          string;
  background:                null | string;
  backgroundGradientColors:  string[];
  assetPath:                 string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter:       boolean;
  isAvailableForTest:        boolean;
  isBaseContent:             boolean;
  role:                      Role | null;
  recruitmentData:           RecruitmentData | null;
  abilities:                 Ability[];
  voiceLine:                 null;
}

export type Ability = {
  slot:        Slot;
  displayName: string;
  description: string;
  displayIcon: null | string;
}

export enum Slot {
  Ability1 = "Ability1",
  Ability2 = "Ability2",
  Grenade = "Grenade",
  Passive = "Passive",
  Ultimate = "Ultimate",
}

export type RecruitmentData = {
  counterId:              string;
  milestoneId:            string;
  milestoneThreshold:     number;
  useLevelVpCostOverride: boolean;
  levelVpCostOverride:    number;
  startDate:              Date;
  endDate:                Date;
}

export type Role = {
  uuid:        string;
  displayName: DisplayName;
  description: string;
  displayIcon: string;
  assetPath:   string;
}

export enum DisplayName {
  Controller = "Controller",
  Duelist = "Duelist",
  Initiator = "Initiator",
  Sentinel = "Sentinel",
}
