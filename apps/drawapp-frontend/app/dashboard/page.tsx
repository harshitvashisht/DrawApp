import React from 'react';
import { MessageSquare, Users, Plus, LogOut, Home, Settings, TrendingUp, Clock, Crown, Search } from 'lucide-react';

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 pt-16">Welcome back, John! 👋</h2>
          <p className="text-gray-400">Here's what's happening with your collaboration spaces</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-purple-100">Total Rooms</h3>
              <MessageSquare size={24} className="text-purple-200" />
            </div>
            <p className="text-3xl font-bold">12</p>
            <p className="text-xs text-purple-200 mt-1">All accessible rooms</p>
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-pink-100">Admin Rooms</h3>
              <Crown size={24} className="text-pink-200" />
            </div>
            <p className="text-3xl font-bold">5</p>
            <p className="text-xs text-pink-200 mt-1">Rooms you created</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-cyan-100">Active Now</h3>
              <TrendingUp size={24} className="text-cyan-200" />
            </div>
            <p className="text-3xl font-bold">8</p>
            <p className="text-xs text-cyan-200 mt-1">Currently active rooms</p>
          </div>
        </div>

        {/* Rooms Section */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold">All Rooms</h2>
            <div className="flex items-center gap-3">
              <div className="relative flex-1 md:flex-initial md:w-64">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search rooms..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center space-x-2 whitespace-nowrap">
                <Plus size={20} />
                <span>Create Room</span>
              </button>
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Room Card 1 */}
            <div className="bg-gray-700 rounded-lg p-5 hover:bg-gray-650 transition-all border border-gray-600 hover:border-purple-500 cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">
                    design-team
                  </h3>
                  <p className="text-xs text-gray-400">Created Mar 1, 2024</p>
                </div>
                <span className="px-2 py-1 bg-yellow-600 text-xs rounded-full flex items-center space-x-1">
                  <Crown size={12} />
                  <span>Admin</span>
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Users size={16} />
                  <span>8 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
            </div>

            {/* Room Card 2 */}
            <div className="bg-gray-700 rounded-lg p-5 hover:bg-gray-650 transition-all border border-gray-600 hover:border-purple-500 cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">
                    project-alpha
                  </h3>
                  <p className="text-xs text-gray-400">Created Mar 5, 2024</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Users size={16} />
                  <span>5 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
            </div>

            {/* Room Card 3 */}
            <div className="bg-gray-700 rounded-lg p-5 hover:bg-gray-650 transition-all border border-gray-600 hover:border-purple-500 cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">
                    brainstorming
                  </h3>
                  <p className="text-xs text-gray-400">Created Mar 10, 2024</p>
                </div>
                <span className="px-2 py-1 bg-yellow-600 text-xs rounded-full flex items-center space-x-1">
                  <Crown size={12} />
                  <span>Admin</span>
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Users size={16} />
                  <span>12 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
            </div>

            {/* Room Card 4 */}
            <div className="bg-gray-700 rounded-lg p-5 hover:bg-gray-650 transition-all border border-gray-600 hover:border-purple-500 cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">
                    dev-team
                  </h3>
                  <p className="text-xs text-gray-400">Created Mar 12, 2024</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Users size={16} />
                  <span>6 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-xs text-gray-400">Idle</span>
                </div>
              </div>
            </div>

            {/* Room Card 5 */}
            <div className="bg-gray-700 rounded-lg p-5 hover:bg-gray-650 transition-all border border-gray-600 hover:border-purple-500 cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">
                    marketing-hub
                  </h3>
                  <p className="text-xs text-gray-400">Created Mar 15, 2024</p>
                </div>
                <span className="px-2 py-1 bg-yellow-600 text-xs rounded-full flex items-center space-x-1">
                  <Crown size={12} />
                  <span>Admin</span>
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Users size={16} />
                  <span>10 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
            </div>

            {/* Room Card 6 */}
            <div className="bg-gray-700 rounded-lg p-5 hover:bg-gray-650 transition-all border border-gray-600 hover:border-purple-500 cursor-pointer group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">
                    client-feedback
                  </h3>
                  <p className="text-xs text-gray-400">Created Mar 18, 2024</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-600">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Users size={16} />
                  <span>4 members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <Clock size={24} />
            <span>Recent Activity</span>
          </h2>
          <div className="space-y-3">
            {/* Activity Item 1 */}
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="font-medium">design-team</p>
                  <p className="text-xs text-gray-400">Last active 5 minutes ago</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm">
                Join
              </button>
            </div>

            {/* Activity Item 2 */}
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="font-medium">brainstorming</p>
                  <p className="text-xs text-gray-400">Last active 15 minutes ago</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm">
                Join
              </button>
            </div>

            {/* Activity Item 3 */}
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="font-medium">marketing-hub</p>
                  <p className="text-xs text-gray-400">Last active 1 hour ago</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm">
                Join
              </button>
            </div>

            {/* Activity Item 4 */}
            <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="font-medium">project-alpha</p>
                  <p className="text-xs text-gray-400">Last active 2 hours ago</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm">
                Join
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}