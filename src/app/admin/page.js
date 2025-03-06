import React from 'react';

const Page = () => {
  // Static data for the admin dashboard
  const stats = [
    {
      id: 1,
      name: 'Total Users',
      value: '8,294',
      change: '+12%',
      icon: '👥',
    },
    {
      id: 2,
      name: 'Revenue',
      value: '$43,123',
      change: '+8%',
      icon: '💰',
    },
    {
      id: 3,
      name: 'Active Orders',
      value: '156',
      change: '-3%',
      icon: '📦',
    },
    {
      id: 4,
      name: 'Conversion Rate',
      value: '24%',
      change: '+2%',
      icon: '📈',
    },
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Alex Thompson',
      email: 'alex.t@example.com',
      role: 'Editor',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Maria Garcia',
      email: 'maria.g@example.com',
      role: 'Viewer',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.w@example.com',
      role: 'Editor',
      status: 'Pending',
    },
    {
      id: 5,
      name: 'Lisa Chen',
      email: 'lisa.c@example.com',
      role: 'Viewer',
      status: 'Active',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
              Admin
            </span>
            <div className="relative">
              <img
                className="h-10 w-10 rounded-full"
                src="/api/placeholder/40/40"
                alt="Admin profile"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats section */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-2xl">{stat.icon}</div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div
                className={`bg-gray-50 px-5 py-3 text-sm ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change} from last month
              </div>
            </div>
          ))}
        </div>

        {/* Recent users section */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Users</h3>
            <p className="mt-1 text-sm text-gray-500">
              A list of recent users in your application.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          user.role === 'Admin'
                            ? 'bg-purple-100 text-purple-800'
                            : user.role === 'Editor'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : user.status === 'Inactive'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900 mr-4">
                        Edit
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">5</span> of <span className="font-medium">25</span> users
              </div>
              <div className="flex-1 flex justify-end">
                <button className="bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="ml-3 bg-blue-600 border border-transparent rounded-md shadow-sm px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Activity section */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
            <p className="mt-1 text-sm text-gray-500">Latest actions performed in the system.</p>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="bg-gray-50 p-3 rounded-md">
                <div className="flex items-start">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-800">
                      User <span className="font-medium">Alex Thompson</span> updated their account details
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-50 p-3 rounded-md">
                <div className="flex items-start">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-800">
                      New user <span className="font-medium">Emma Roberts</span> registered
                    </p>
                    <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-50 p-3 rounded-md">
                <div className="flex items-start">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-800">
                      <span className="font-medium">Maria Garcia</span>'s account was deactivated
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-50 p-3 rounded-md">
                <div className="flex items-start">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-800">System maintenance completed</p>
                    <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;