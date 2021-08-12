import React, { useState, useEffect } from "react"
import _ from "lodash"
import Tippy from "@tippyjs/react"
import { useDebounce } from "react-use"
import {
  SkillsSectionWrapper,
  TechSkillsHeaderWrapper,
  TechSkillsRolesWrapper,
  TechSkillRoleItem,
  TechSkillsWrapper,
  TechSkillItemWrapper,
  TechSkillItem,
  TechSkillsEmptyWrapper,
  TechSkillsEmptyText,
  TechSkillsEmptyIcon,
  TechSkillItemLogo,
} from "./SkillsSection.styles"
import LazyImage from "../../../shared/LazyImage/LazyImage.component"

import {
  TECH_ROLES,
  TECH_SKILLS_DATA,
  TECH_SKILLS_BY_ROLE,
} from "../../../../data/tech_skills_data"
import {
  getSkillItemVariants,
  skillEmptyPointUpVariants,
  skillEmptyWrapperVariants,
} from "./SkillsSection.variants"
import { ITabsRefs, SkillRoleTypes } from "../../../../../types"
import { AnimatePresence } from "framer-motion"
import ActiveRoleTab from "./ActiveRoleTab/ActiveRoleTab.component"
import { getIcon } from "../../../../utils/icons"
import Icon from "../../../shared/Icon/Icon.component"

const SkillsSection = () => {
  const [animatingTab, setAnimatingTab] = useState<boolean>(false)
  const [selectedRole, setSelectedRole] = useState<SkillRoleTypes>()
  const [, cancelAnimatingTabDebounce] = useDebounce(
    () => {
      setAnimatingTab(false)
    },
    1000,
    [animatingTab]
  )

  const getRoleSkills = (): string[] =>
    selectedRole ? TECH_SKILLS_BY_ROLE[selectedRole] : []

  const tabRefs: ITabsRefs = TECH_ROLES.reduce(
    (acc: any, item: SkillRoleTypes) => {
      acc[item] = React.createRef()
      return acc
    },
    {}
  )

  const changeTab = (role: SkillRoleTypes): void => {
    setSelectedRole(role)
    setAnimatingTab(true)
  }

  useEffect(() => {}, [animatingTab, selectedRole])

  return (
    <SkillsSectionWrapper>
      <TechSkillsHeaderWrapper>
        <TechSkillsRolesWrapper>
          <ActiveRoleTab refs={tabRefs} activeRoute={selectedRole} />
          {TECH_ROLES.map((item: SkillRoleTypes) => (
            <TechSkillRoleItem
              key={item}
              ref={tabRefs[item]}
              isActive={item === selectedRole}
              onClick={() => changeTab(item)}
            >
              {item}
            </TechSkillRoleItem>
          ))}
        </TechSkillsRolesWrapper>
      </TechSkillsHeaderWrapper>
      {!_.isEmpty(selectedRole) ? (
        <TechSkillsWrapper animatingTab={animatingTab}>
          <AnimatePresence key="skills-wrapper-an">
            {getRoleSkills().map((item, index) => (
              <TechSkillItemWrapper
                key={
                  !_.isNull(item)
                    ? `${selectedRole}-${TECH_SKILLS_DATA[item].key}`
                    : `blank-${index}`
                }
              >
                {!_.isNull(item) ? (
                  <Tippy content={TECH_SKILLS_DATA[item].text}>
                    <TechSkillItem
                      suppressHydrationWarning
                      iconColor={TECH_SKILLS_DATA[item].iconColor}
                      bgColor={TECH_SKILLS_DATA[item].bgColor}
                      initial="initial"
                      animate="animate"
                      whileHover="whileHoverOrTapScale"
                      whileTap="whileHoverOrTapScale"
                      exit="onExit"
                      variants={getSkillItemVariants()}
                    >
                      {TECH_SKILLS_DATA[item].icon ? (
                        <Icon icon={TECH_SKILLS_DATA[item].icon} />
                      ) : (
                        <TechSkillItemLogo>
                          <LazyImage
                            src={
                              require(`../../../../assets/icons/${TECH_SKILLS_DATA[item].key}.png`)
                                .default
                            }
                            alt={TECH_SKILLS_DATA[item].text}
                          />
                        </TechSkillItemLogo>
                      )}
                    </TechSkillItem>
                  </Tippy>
                ) : null}
              </TechSkillItemWrapper>
            ))}
          </AnimatePresence>
        </TechSkillsWrapper>
      ) : (
        <TechSkillsEmptyWrapper
          initial="initial"
          animate="animate"
          variants={skillEmptyWrapperVariants}
        >
          <TechSkillsEmptyIcon
            initial="initial"
            animate={["show", "pointUp"]}
            variants={skillEmptyPointUpVariants}
          >
            ☝️
          </TechSkillsEmptyIcon>
          <TechSkillsEmptyText>Select a role</TechSkillsEmptyText>
        </TechSkillsEmptyWrapper>
      )}
    </SkillsSectionWrapper>
  )
}

export default SkillsSection
