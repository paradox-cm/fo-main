"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardChart } from "@/components/admin/dashboard-chart"
import { DashboardStats } from "@/components/admin/dashboard-stats"
import { RecentOrders } from "@/components/admin/recent-orders"
import { TopProducts } from "@/components/admin/top-products"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-tektur uppercase tracking-wide">Dashboard</h1>
        <p className="text-muted-foreground font-sans">Overview of your website performance and analytics</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <div className="overflow-x-auto pb-2">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="overview" className="font-mono text-xs uppercase tracking-wide">
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="font-mono text-xs uppercase tracking-wide">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="sales" className="font-mono text-xs uppercase tracking-wide">
              Sales
            </TabsTrigger>
            <TabsTrigger value="engagement" className="font-mono text-xs uppercase tracking-wide">
              Engagement
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="space-y-6">
          <DashboardStats />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4 border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-xl">Website Traffic</CardTitle>
                <CardDescription className="font-mono text-xs">Daily visitors over the past 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <DashboardChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3 border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-xl">Top Products</CardTitle>
                <CardDescription className="font-mono text-xs">Best selling products this month</CardDescription>
              </CardHeader>
              <CardContent>
                <TopProducts />
              </CardContent>
            </Card>
          </div>

          <Card className="border-[#242423] bg-black/20">
            <CardHeader>
              <CardTitle className="font-tektur uppercase tracking-wide text-xl">Recent Orders</CardTitle>
              <CardDescription className="font-mono text-xs">Latest customer purchases</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentOrders />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">Traffic Sources</CardTitle>
                <CardDescription className="font-mono text-xs">Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px] flex items-center justify-center">
                  <div className="w-full max-w-[180px] aspect-square relative">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div
                        className="w-full h-full"
                        style={{
                          background: "conic-gradient(#B99C20 0% 65%, #B99C2033 65% 100%)",
                        }}
                      ></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-2xl font-tektur">65%</span>
                      <span className="text-xs font-mono text-muted-foreground">Organic</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#B99C20] mr-2"></div>
                      <span className="text-sm font-mono">Organic Search</span>
                    </div>
                    <span className="text-sm font-mono">65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#ECD055] mr-2"></div>
                      <span className="text-sm font-mono">Direct</span>
                    </div>
                    <span className="text-sm font-mono">20%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#5D4E10] mr-2"></div>
                      <span className="text-sm font-mono">Social</span>
                    </div>
                    <span className="text-sm font-mono">10%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[#242423] mr-2"></div>
                      <span className="text-sm font-mono">Referral</span>
                    </div>
                    <span className="text-sm font-mono">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">User Demographics</CardTitle>
                <CardDescription className="font-mono text-xs">Age and gender distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-mono">Age Groups</span>
                      <span className="text-sm font-mono text-[#B99C20]">% of Users</span>
                    </div>
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span>18-24</span>
                          <span>15%</span>
                        </div>
                        <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span>25-34</span>
                          <span>42%</span>
                        </div>
                        <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span>35-44</span>
                          <span>28%</span>
                        </div>
                        <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "28%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span>45-54</span>
                          <span>10%</span>
                        </div>
                        <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "10%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span>55+</span>
                          <span>5%</span>
                        </div>
                        <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "5%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-mono">Gender</span>
                      <span className="text-sm font-mono text-[#B99C20]">% of Users</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span>Male</span>
                          <span>68%</span>
                        </div>
                        <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "68%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span>Female</span>
                          <span>32%</span>
                        </div>
                        <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "32%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">Device Usage</CardTitle>
                <CardDescription className="font-mono text-xs">What devices visitors use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#1A1505] flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20]"
                      >
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                        <path d="M12 18h.01" />
                      </svg>
                    </div>
                    <span className="text-sm font-mono">Mobile</span>
                    <span className="text-lg font-tektur text-[#B99C20]">58%</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#1A1505] flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20]"
                      >
                        <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
                        <line x1="12" x2="12" y1="16" y2="20" />
                        <line x1="8" x2="16" y1="20" y2="20" />
                      </svg>
                    </div>
                    <span className="text-sm font-mono">Desktop</span>
                    <span className="text-lg font-tektur text-[#B99C20]">32%</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#1A1505] flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20]"
                      >
                        <rect width="16" height="12" x="4" y="6" rx="2" ry="2" />
                      </svg>
                    </div>
                    <span className="text-sm font-mono">Tablet</span>
                    <span className="text-lg font-tektur text-[#B99C20]">10%</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-mono">Browser Usage</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span>Chrome</span>
                        <span>64%</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span>Safari</span>
                        <span>22%</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span>Firefox</span>
                        <span>8%</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span>Edge</span>
                        <span>5%</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span>Other</span>
                        <span>1%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">Page Performance</CardTitle>
                <CardDescription className="font-mono text-xs">Most visited pages and metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#242423]">
                          <th className="text-left py-2 px-2 font-mono text-xs uppercase tracking-wide">Page</th>
                          <th className="text-left py-2 px-2 font-mono text-xs uppercase tracking-wide">Views</th>
                          <th className="text-left py-2 px-2 font-mono text-xs uppercase tracking-wide">Avg Time</th>
                          <th className="text-left py-2 px-2 font-mono text-xs uppercase tracking-wide">Bounce</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#242423] hover:bg-[#1A1505]/10">
                          <td className="py-2 px-2 text-sm font-mono">/shop</td>
                          <td className="py-2 px-2 text-sm">12,845</td>
                          <td className="py-2 px-2 text-sm font-mono">2:34</td>
                          <td className="py-2 px-2 text-sm font-mono">24%</td>
                        </tr>
                        <tr className="border-b border-[#242423] hover:bg-[#1A1505]/10">
                          <td className="py-2 px-2 text-sm font-mono">/</td>
                          <td className="py-2 px-2 text-sm">8,932</td>
                          <td className="py-2 px-2 text-sm font-mono">1:45</td>
                          <td className="py-2 px-2 text-sm font-mono">32%</td>
                        </tr>
                        <tr className="border-b border-[#242423] hover:bg-[#1A1505]/10">
                          <td className="py-2 px-2 text-sm font-mono">/about</td>
                          <td className="py-2 px-2 text-sm">4,271</td>
                          <td className="py-2 px-2 text-sm font-mono">3:12</td>
                          <td className="py-2 px-2 text-sm font-mono">18%</td>
                        </tr>
                        <tr className="border-b border-[#242423] hover:bg-[#1A1505]/10">
                          <td className="py-2 px-2 text-sm font-mono">/shop/tactical-backpack</td>
                          <td className="py-2 px-2 text-sm">3,845</td>
                          <td className="py-2 px-2 text-sm font-mono">4:05</td>
                          <td className="py-2 px-2 text-sm font-mono">12%</td>
                        </tr>
                        <tr className="border-b border-[#242423] hover:bg-[#1A1505]/10">
                          <td className="py-2 px-2 text-sm font-mono">/shop/down-jacket</td>
                          <td className="py-2 px-2 text-sm">2,932</td>
                          <td className="py-2 px-2 text-sm font-mono">3:45</td>
                          <td className="py-2 px-2 text-sm font-mono">15%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">Conversion Funnel</CardTitle>
                <CardDescription className="font-mono text-xs">User journey through purchase process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="relative pt-6">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#242423] -translate-x-1/2"></div>

                    <div className="relative z-10 mb-8">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#B99C20] flex items-center justify-center text-black font-tektur mr-3">
                          1
                        </div>
                        <div className="flex-1">
                          <h4 className="font-tektur text-sm">PRODUCT VIEW</h4>
                          <div className="flex justify-between">
                            <span className="text-xs font-mono text-muted-foreground">Visitors</span>
                            <span className="text-xs font-mono">24,532</span>
                          </div>
                        </div>
                      </div>
                      <div className="pl-11">
                        <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mb-8">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#B99C20] flex items-center justify-center text-black font-tektur mr-3">
                          2
                        </div>
                        <div className="flex-1">
                          <h4 className="font-tektur text-sm">ADD TO CART</h4>
                          <div className="flex justify-between">
                            <span className="text-xs font-mono text-muted-foreground">Conversion</span>
                            <span className="text-xs font-mono">42% (10,303)</span>
                          </div>
                        </div>
                      </div>
                      <div className="pl-11">
                        <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 mb-8">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#B99C20] flex items-center justify-center text-black font-tektur mr-3">
                          3
                        </div>
                        <div className="flex-1">
                          <h4 className="font-tektur text-sm">CHECKOUT</h4>
                          <div className="flex justify-between">
                            <span className="text-xs font-mono text-muted-foreground">Conversion</span>
                            <span className="text-xs font-mono">68% (7,006)</span>
                          </div>
                        </div>
                      </div>
                      <div className="pl-11">
                        <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "28%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#B99C20] flex items-center justify-center text-black font-tektur mr-3">
                          4
                        </div>
                        <div className="flex-1">
                          <h4 className="font-tektur text-sm">PURCHASE</h4>
                          <div className="flex justify-between">
                            <span className="text-xs font-mono text-muted-foreground">Conversion</span>
                            <span className="text-xs font-mono">85% (5,955)</span>
                          </div>
                        </div>
                      </div>
                      <div className="pl-11">
                        <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                          <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "24%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sales" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-[#242423] bg-black/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-mono uppercase tracking-wide">Monthly Revenue</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#B99C20]"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-tektur">$86,245</div>
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-green-500">+12.5%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-mono uppercase tracking-wide">Avg Order Value</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#B99C20]"
                >
                  <path d="M2 20h.01M7 20v-4" />
                  <path d="M12 20v-8" />
                  <path d="M17 20v-6" />
                  <path d="M22 20V8" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-tektur">$142.38</div>
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-green-500">+3.2%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-mono uppercase tracking-wide">Conversion Rate</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#B99C20]"
                >
                  <path d="m2 12 5.25 5 2-2-3.25-3 3.25-3-2-2L2 12Z" />
                  <path d="m22 12-5.25-5-2 2 3.25 3-3.25 3 2 2L22 12Z" />
                  <path d="m9 6 3 12 3-12" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-tektur">3.8%</div>
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-green-500">+0.6%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-mono uppercase tracking-wide">Refund Rate</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#B99C20]"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-tektur">1.2%</div>
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-green-500">-0.3%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">Revenue Trends</CardTitle>
                <CardDescription className="font-mono text-xs">Monthly revenue for the past 12 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex h-full items-end gap-2 pr-2">
                    {[65, 48, 72, 68, 55, 78, 82, 84, 75, 92, 88, 96].map((value, i) => (
                      <div key={i} className="relative flex-1 group">
                        <div
                          className="absolute bottom-0 w-full bg-[#B99C20] rounded-t-sm transition-all duration-300 group-hover:bg-[#ECD055]"
                          style={{ height: `${value}%` }}
                        ></div>
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1505] text-white text-xs py-1 px-2 rounded font-mono transition-opacity">
                          ${Math.floor(value * 1000)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs font-mono text-muted-foreground">
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">Sales by Category</CardTitle>
                <CardDescription className="font-mono text-xs">
                  Revenue distribution across product categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-mono">Apparel</span>
                      <span className="text-sm font-mono text-[#B99C20]">$42,845</span>
                    </div>
                    <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                      <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "48%" }}></div>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">48% of total sales</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-mono">Gear</span>
                      <span className="text-sm font-mono text-[#B99C20]">$32,450</span>
                    </div>
                    <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                      <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "36%" }}></div>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">36% of total sales</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-mono">Accessories</span>
                      <span className="text-sm font-mono text-[#B99C20]">$10,950</span>
                    </div>
                    <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                      <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "16%" }}></div>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">16% of total sales</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">Payment Methods</CardTitle>
                <CardDescription className="font-mono text-xs">Distribution of payment types</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A1505] flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20]"
                      >
                        {" "}
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">Credit Card</span>
                        <span className="text-sm font-mono">68%</span>
                      </div>
                      <div className="h-1.5 bg-[#242423] rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A1505] flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20]"
                      >
                        <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">PayPal</span>
                        <span className="text-sm font-mono">22%</span>
                      </div>
                      <div className="h-1.5 bg-[#242423] rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "22%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A1505] flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20]"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">Apple Pay</span>
                        <span className="text-sm font-mono">8%</span>
                      </div>
                      <div className="h-1.5 bg-[#242423] rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "8%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A1505] flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20]"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m8 14 2.5-2.5" />
                        <path d="m14 8-2.5 2.5" />
                        <path d="m10.5 10.5-2.5 2.5" />
                        <path d="m13.5 13.5 2.5-2.5" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">Other</span>
                        <span className="text-sm font-mono">2%</span>
                      </div>
                      <div className="h-1.5 bg-[#242423] rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "2%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20 md:col-span-2">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">Top Selling Products</CardTitle>
                <CardDescription className="font-mono text-xs">Best performing products by revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#242423]">
                        <th className="text-left py-2 px-4 font-mono text-xs uppercase tracking-wide">Product</th>
                        <th className="text-left py-2 px-4 font-mono text-xs uppercase tracking-wide">Units Sold</th>
                        <th className="text-left py-2 px-4 font-mono text-xs uppercase tracking-wide">Revenue</th>
                        <th className="text-left py-2 px-4 font-mono text-xs uppercase tracking-wide">Growth</th>
                        <th className="text-left py-2 px-4 font-mono text-xs uppercase tracking-wide">Profit Margin</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#242423] hover:bg-[#1A1505]/10">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#1A1505] rounded mr-2"></div>
                            <div className="font-mono text-sm">Tactical Backpack</div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">245</td>
                        <td className="py-3 px-4 text-sm font-mono text-[#B99C20]">$31,849.55</td>
                        <td className="py-3 px-4 text-sm font-mono text-green-500">+12.5%</td>
                        <td className="py-3 px-4 text-sm font-mono">42%</td>
                      </tr>
                      <tr className="border-b border-[#242423] hover:bg-[#1A1505]/10">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#1A1505] rounded mr-2"></div>
                            <div className="font-mono text-sm">Down Jacket</div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">187</td>
                        <td className="py-3 px-4 text-sm font-mono text-[#B99C20]">$46,748.13</td>
                        <td className="py-3 px-4 text-sm font-mono text-green-500">+24.3%</td>
                        <td className="py-3 px-4 text-sm font-mono">38%</td>
                      </tr>
                      <tr className="border-b border-[#242423] hover:bg-[#1A1505]/10">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#1A1505] rounded mr-2"></div>
                            <div className="font-mono text-sm">Performance Polo</div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">164</td>
                        <td className="py-3 px-4 text-sm font-mono text-[#B99C20]">$13,118.36</td>
                        <td className="py-3 px-4 text-sm font-mono text-green-500">+8.7%</td>
                        <td className="py-3 px-4 text-sm font-mono">45%</td>
                      </tr>
                      <tr className="border-b border-[#242423] hover:bg-[#1A1505]/10">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#1A1505] rounded mr-2"></div>
                            <div className="font-mono text-sm">Technical Shell</div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">152</td>
                        <td className="py-3 px-4 text-sm font-mono text-[#B99C20]">$30,398.48</td>
                        <td className="py-3 px-4 text-sm font-mono text-green-500">+16.2%</td>
                        <td className="py-3 px-4 text-sm font-mono">40%</td>
                      </tr>
                      <tr className="border-b border-[#242423] hover:bg-[#1A1505]/10">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#1A1505] rounded mr-2"></div>
                            <div className="font-mono text-sm">Tactical Polo</div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm">138</td>
                        <td className="py-3 px-4 text-sm font-mono text-[#B99C20]">$12,418.62</td>
                        <td className="py-3 px-4 text-sm font-mono text-red-500">-3.5%</td>
                        <td className="py-3 px-4 text-sm font-mono">36%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-[#242423] bg-black/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-mono uppercase tracking-wide">Avg. Session</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#B99C20]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-tektur">3:24</div>
                <p className="text-xs text-muted-foreground font-sans">
                  <span className="text-green-500">+18s</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-mono uppercase tracking-wide">Pages / Session</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#B99C20]"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-tektur">4.2</div>
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-green-500">+0.3</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-mono uppercase tracking-wide">Bounce Rate</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#B99C20]"
                >
                  <path d="M12 22c-4.2 0-8-3.22-8-8.2 0-4.98 3.8-9 8-9s8 4.02 8 9c0 4.98-3.8 8.2-8 8.2" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-tektur">28.4%</div>
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-green-500">-2.1%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-mono uppercase tracking-wide">Return Rate</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#B99C20]"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-tektur">42.8%</div>
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-green-500">+3.4%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">User Engagement Metrics</CardTitle>
                <CardDescription className="font-mono text-xs">Key engagement metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#B99C20] mr-2"></div>
                        <span className="text-sm font-mono">Session Duration</span>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">Last 6 months</span>
                    </div>
                    <div className="h-[80px] w-full">
                      <div className="flex h-full items-end gap-1">
                        {[3.1, 2.8, 3.2, 3.0, 3.4, 3.6].map((value, i) => (
                          <div key={i} className="relative flex-1 group">
                            <div
                              className="absolute bottom-0 w-full bg-[#B99C20] rounded-t-sm transition-all duration-300 group-hover:bg-[#ECD055]"
                              style={{ height: `${(value / 4) * 100}%` }}
                            ></div>
                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1505] text-white text-xs py-1 px-2 rounded font-mono transition-opacity">
                              {value.toFixed(1)}m
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#ECD055] mr-2"></div>
                        <span className="text-sm font-mono">Pages Per Session</span>
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">Last 6 months</span>
                    </div>
                    <div className="h-[80px] w-full">
                      <div className="flex h-full items-end gap-1">
                        {[3.8, 3.9, 4.0, 4.1, 4.0, 4.2].map((value, i) => (
                          <div key={i} className="relative flex-1 group">
                            <div
                              className="absolute bottom-0 w-full bg-[#ECD055] rounded-t-sm transition-all duration-300 group-hover:bg-[#B99C20]"
                              style={{ height: `${(value / 5) * 100}%` }}
                            ></div>
                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1505] text-white text-xs py-1 px-2 rounded font-mono transition-opacity">
                              {value.toFixed(1)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">User Journey</CardTitle>
                <CardDescription className="font-mono text-xs">Most common user paths through the site</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#B99C20] flex items-center justify-center text-black font-tektur mr-2">
                        1
                      </div>
                      <div className="text-sm font-mono">Homepage</div>
                    </div>
                    <div className="pl-8 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20] mr-2"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <div className="text-xs font-mono text-muted-foreground">82% continue</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#B99C20] flex items-center justify-center text-black font-tektur mr-2">
                        2
                      </div>
                      <div className="text-sm font-mono">Shop Page</div>
                    </div>
                    <div className="pl-8 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20] mr-2"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <div className="text-xs font-mono text-muted-foreground">68% continue</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#B99C20] flex items-center justify-center text-black font-tektur mr-2">
                        3
                      </div>
                      <div className="text-sm font-mono">Product Detail</div>
                    </div>
                    <div className="pl-8 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20] mr-2"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <div className="text-xs font-mono text-muted-foreground">42% continue</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#B99C20] flex items-center justify-center text-black font-tektur mr-2">
                        4
                      </div>
                      <div className="text-sm font-mono">Add to Cart</div>
                    </div>
                    <div className="pl-8 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20] mr-2"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <div className="text-xs font-mono text-muted-foreground">38% continue</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#B99C20] flex items-center justify-center text-black font-tektur mr-2">
                        5
                      </div>
                      <div className="text-sm font-mono">Checkout</div>
                    </div>
                    <div className="pl-8 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20] mr-2"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <div className="text-xs font-mono text-muted-foreground">24% complete purchase</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">Content Engagement</CardTitle>
                <CardDescription className="font-mono text-xs">Most engaging content on the site</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-mono">Product Videos</span>
                      <span className="text-sm font-mono">85% completion rate</span>
                    </div>
                    <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                      <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-mono">Blog Articles</span>
                      <span className="text-sm font-mono">72% read time</span>
                    </div>
                    <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                      <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "72%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-mono">Product Galleries</span>
                      <span className="text-sm font-mono">68% view all</span>
                    </div>
                    <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                      <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "68%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-mono">Customer Reviews</span>
                      <span className="text-sm font-mono">54% engagement</span>
                    </div>
                    <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                      <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "54%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-mono">Size Guides</span>
                      <span className="text-sm font-mono">42% usage</span>
                    </div>
                    <div className="h-2 bg-[#242423] rounded-full overflow-hidden">
                      <div className="h-full bg-[#B99C20] rounded-full" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-lg">Social Engagement</CardTitle>
                <CardDescription className="font-mono text-xs">Performance across social platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A1505] flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20]"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">Facebook</span>
                        <span className="text-sm font-mono">+12%</span>
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">New Likes this month</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A1505] flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20]"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">Twitter</span>
                        <span className="text-sm font-mono">+8%</span>
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">New Followers this month</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A1505] flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20]"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">Instagram</span>
                        <span className="text-sm font-mono">+15%</span>
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">New Followers this month</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A1505] flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#B99C20]"
                      >
                        <path d="M7.87 9.6a4.23 4.23 0 0 0-.58 3.34c0 2.27 1.84 4.11 4.11 4.11 2.27 0 4.11-1.84 4.11-4.11a4.11 4.11 0 0 0-8.22 0Z" />
                        <path d="M16.57 6.1a7.7 7.7 0 0 0-13.14 0C1.86 9.43 1.86 14.57 5.57 17.9c3.73 3.33 8.86 3.33 12.57 0a7.7 7.7 0 0 0 0-11.8Z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">TikTok</span>
                        <span className="text-sm font-mono">+22%</span>
                      </div>
                      <div className="text-xs font-mono text-muted-foreground">New Followers this month</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
