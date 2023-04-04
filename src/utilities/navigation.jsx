import {
    UserGroupIcon,
    EyeIcon,
    QuestionMarkCircleIcon
} from '@heroicons/react/24/solid'

export const DASHBOARD_LINKS = [
    {
        key: 'ask',
        path: 'questions/ask',
        label: 'Ask a Question',
        icon: <QuestionMarkCircleIcon />
    },
    {
        key: 'see',
        path: 'questions/see-all',
        label: 'See all Questions',
        icon: <EyeIcon />
    },
    {
        key: 'meet',
        path: 'team',
        label: 'Latest Questions',
        icon: <UserGroupIcon />
    },
]