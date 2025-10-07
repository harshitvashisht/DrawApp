"use client"
import React, { useState } from "react";
import {MessageSquare,Users, Plus, LogOut,Home,Settings,TrendingUp,Clock, Crown, Search} from "lucide-react";
import Rooms from "../components/rooms";
import AppBar from "../components/appbar";

export default function UserDashboard() {
  const [count , setCount] = useState(0)
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <AppBar type="afterAuth"/>
      <main className="max-w-7xl mx-auto px-6 py-8 pt-16">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h2>
          <p className="text-gray-400">
            Here's what's happening with your collaboration spaces
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-purple-100">Total Rooms</h3>
              <MessageSquare size={24} className="text-purple-200" />
            </div>
            <p className="text-3xl font-bold">{count}</p>
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
            <p className="text-3xl font-bold">{count}</p>
            <p className="text-xs text-cyan-200 mt-1">Currently active rooms</p>
          </div>
        </div>

        {/* Rooms Section */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl font-bold">All Rooms</h2>
            <div className="flex items-center gap-3">
              <div className="relative flex-1 md:flex-initial md:w-64">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
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

          <Rooms onCountChange={(count)=>setCount(count)} />
        </div>

        {/* Recent Activity Section */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <Clock size={24} />
            <span>Recent Activity</span>
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>🟣 You created “UI Design Room” 2 hours ago</li>
            <li>🟢 Anna joined “Project Alpha”</li>
            <li>🔵 Message sent in “Frontend Discussion”</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

