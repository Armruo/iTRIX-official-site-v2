import { UserActivity } from '@/types/user';
import { format } from 'date-fns';

interface UserActivitiesProps {
  activities: UserActivity[];
}

export default function UserActivities({ activities }: UserActivitiesProps) {
  if (!activities.length) {
    return (
      <div className="p-4 text-center text-gray-500">
        No activities found
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      {activities.map((activity) => (
        <div key={activity.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${
                activity.status === 'completed' ? 'bg-green-500' :
                activity.status === 'ongoing' ? 'bg-blue-500' :
                'bg-red-500'
              }`} />
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {format(new Date(activity.timestamp), 'yyyy-MM-dd HH:mm')}
                </p>
              </div>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${
              activity.status === 'completed' ? 'bg-green-100 text-green-800' :
              activity.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
              'bg-red-100 text-red-800'
            }`}>
              {activity.status === 'completed' ? 'Completed' :
               activity.status === 'ongoing' ? 'In Progress' :
               'Failed'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
