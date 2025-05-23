import { MobileNav } from "@/components/mobile-nav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileSettings } from "@/components/settings/profile-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { SecuritySettings } from "@/components/settings/security-settings"
import { PreferenceSettings } from "@/components/settings/preference-settings"

export function SettingsPage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-4">
          <ProfileSettings />
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <NotificationSettings />
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <SecuritySettings />
        </TabsContent>
        <TabsContent value="preferences" className="space-y-4">
          <PreferenceSettings />
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
