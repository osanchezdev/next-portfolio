import React, { useState, useEffect } from "react"
import _ from "lodash"
import Tippy from "@tippyjs/react"
import {
  SkillsSectionWrapper,
  TechSkillsHeaderWrapper,
  TechSkillsHeaderTitle,
  TechSkillsRolesWrapper,
  TechSkillRoleItem,
  TechSkillsWrapper,
  TechSkillItemWrapper,
  TechSkillItem,
  TechSkillsEmptyWrapper,
  TechSkillsEmptyText,
  TechSkillsEmptyIcon,
} from "./SkillsSection.styles"
import LazyImage from "../../../shared/LazyImage/LazyImage.component"

import {
  TECH_ROLES,
  TECH_SKILLS_DATA,
  TECH_SKILLS_BY_ROLE,
} from "../../../../constants/tech_skills"
import {
  getSkillItemVariants,
  skillEmptyPointUpVariants,
  skillEmptyWrapperVariants,
} from "./SkillsSection.variants"
import { ITabsRefs, SkillRoleTypes } from "../../../../../types"
import { AnimatePresence } from "framer-motion"
import ActiveRoleTab from "./ActiveRoleTab/ActiveRoleTab.component"

const SkillsSection = () => {
  const [animating, setAnimating] = React.useState(false)
  const [selectedRole, setSelectedRole] = useState<SkillRoleTypes>()

  const getRoleSkills = (): number[] =>
    selectedRole ? TECH_SKILLS_BY_ROLE[selectedRole] : []

  const tabRefs: ITabsRefs = TECH_ROLES.reduce(
    (acc: any, item: SkillRoleTypes) => {
      acc[item] = React.createRef()
      return acc
    },
    {}
  )

  useEffect(() => {}, [selectedRole])

  return (
    <SkillsSectionWrapper>
      <TechSkillsHeaderWrapper>
        <TechSkillsHeaderTitle>Skills by role:</TechSkillsHeaderTitle>
        <TechSkillsRolesWrapper>
          <ActiveRoleTab
            refs={tabRefs}
            activeRoute={selectedRole}
            finishAnimating={() => setAnimating(false)}
            animating={animating}
          />
          {TECH_ROLES.map((item: SkillRoleTypes) => (
            <TechSkillRoleItem
              key={item}
              ref={tabRefs[item]}
              isActive={item === selectedRole}
              onClick={() => {
                setSelectedRole(item)
                setAnimating(true)
              }}
            >
              {item}
            </TechSkillRoleItem>
          ))}
        </TechSkillsRolesWrapper>
      </TechSkillsHeaderWrapper>

      {!_.isEmpty(selectedRole) ? (
        <TechSkillsWrapper>
          <AnimatePresence key="skills-wrapper-an">
            {getRoleSkills().map((item, index) => (
              <TechSkillItemWrapper
                key={
                  item ? `${selectedRole}-${TECH_SKILLS_DATA[item].key}` : index
                }
              >
                {item ? (
                  <Tippy content={TECH_SKILLS_DATA[item].text}>
                    <TechSkillItem
                      suppressHydrationWarning
                      bgColor={TECH_SKILLS_DATA[item].bgColor}
                      initial="initial"
                      animate="animate"
                      whileHover="whileHoverOrTapScale"
                      whileTap="whileHoverOrTapScale"
                      exit="onExit"
                      variants={getSkillItemVariants()}
                    >
                      <LazyImage
                        src={
                          require(`../../../../assets/icons/${TECH_SKILLS_DATA[item].key}.png`)
                            .default
                        }
                      />
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
