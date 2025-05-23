import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PaymentHistory } from "@/components/maintenance/payment-history"
import { PaymentForm } from "@/components/maintenance/payment-form"
import { PaymentDueCard } from "@/components/maintenance/payment-due-card"

export function MaintenancePage() {
  return (
    <div className="flex flex-col gap-4 pb-16 md:pb-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Maintenance Payment</h1>
        <p className="text-muted-foreground">Manage your maintenance payments and view payment history</p>
      </div>

      <Tabs defaultValue="payment" className="space-y-4">
        <TabsList>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="payment" className="space-y-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Make Payment</CardTitle>
                  <CardDescription>Pay your maintenance dues securely</CardDescription>
                </CardHeader>
                <CardContent>
                  <PaymentForm />
                </CardContent>
              </Card>
            </div>
            <div>
              <PaymentDueCard />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View your past maintenance payments</CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentHistory />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Configure your payment preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Auto Payment</h3>
                  <p className="text-sm text-muted-foreground">Enable automatic payment for maintenance dues</p>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline">Enable Auto Payment</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Payment Reminders</h3>
                  <p className="text-sm text-muted-foreground">Configure payment reminder notifications</p>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline">Configure Reminders</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Payment Methods</h3>
                  <p className="text-sm text-muted-foreground">Manage your saved payment methods</p>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline">Manage Payment Methods</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <MobileNav />
    </div>
  )
}
