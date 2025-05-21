import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon
} from '@heroicons/react/16/solid'
import {
  ChartPieIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/20/solid'
import {
  Avatar,
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarLayout,
  SidebarSection,
  SidebarSpacer
} from '@starter/ui/components'
import type { PropsWithChildren } from 'react'
import { SignOutDropdownItem } from '.'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem
              href='/'
              aria-label='Search'>
              <MagnifyingGlassIcon />
            </NavbarItem>
            <NavbarItem
              href='/'
              aria-label='Inbox'>
              <InboxIcon />
            </NavbarItem>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar
                  initials='BA'
                  className='bg-blue-500 text-white'
                  square
                />
              </DropdownButton>
              <DropdownMenu
                className='min-w-64'
                anchor='bottom end'>
                <DropdownItem href='/'>
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href='/'>
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href='/'>
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href='/'>
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <SignOutDropdownItem />
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Dropdown>
              <DropdownButton
                as={SidebarItem}
                className='lg:mb-2.5'>
                <Avatar
                  initials='BA'
                  className='bg-blue-500 text-white'
                />
                <SidebarLabel>BlueAlpha</SidebarLabel>
                <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu
                className='min-w-80 lg:min-w-64'
                anchor='bottom start'>
                <DropdownItem href='/'>
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href='/'>
                  <Avatar
                    initials='W2'
                    className='bg-purple-500 text-white'
                  />
                  <DropdownLabel>Workspace 2</DropdownLabel>
                </DropdownItem>
                <DropdownItem href='/'>
                  <Avatar
                    initials='W3'
                    className='bg-pink-500 text-white'
                  />
                  <DropdownLabel>Workspace 3</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href='/'>
                  <PlusIcon />
                  <DropdownLabel>New team&hellip;</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <SidebarSection className='max-lg:hidden'>
              <SidebarItem href='/'>
                <MagnifyingGlassIcon />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
              <SidebarItem href='/'>
                <InboxIcon />
                <SidebarLabel>Inbox</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem
                current
                href='/'>
                <HomeIcon />
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarItem>
              <SidebarItem href='/'>
                <MegaphoneIcon />
                <SidebarLabel>Campaigns</SidebarLabel>
              </SidebarItem>
              <SidebarItem href='/'>
                <UserGroupIcon />
                <SidebarLabel>Audiences</SidebarLabel>
              </SidebarItem>
              <SidebarItem href='/'>
                <ChartPieIcon />
                <SidebarLabel>Analytics</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href='/'>
                <QuestionMarkCircleIcon />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
              <SidebarItem href='/'>
                <SparklesIcon />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className='max-lg:hidden'>
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className='flex min-w-0 items-center gap-3'>
                  <Avatar
                    initials='S'
                    className='size-10'
                    square
                  />
                  <span className='min-w-0'>
                    <span className='block truncate font-medium text-sm/5 text-zinc-950 dark:text-white'>
                      Samy
                    </span>
                    <span className='block truncate font-normal text-xs/5 text-zinc-500 dark:text-zinc-400'>
                      samy@samyvs.com
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <DropdownMenu
                className='min-w-64'
                anchor='top start'>
                <DropdownItem href='/'>
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href='/'>
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href='/'>
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href='/'>
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <SignOutDropdownItem />
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }>
      {children}
    </SidebarLayout>
  )
}
