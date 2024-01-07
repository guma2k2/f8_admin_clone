import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'Courses',
        path: '/dashboard/courses',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Add Course',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Update Course',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />,
                cName: 'sub-nav'
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Products',
        path: '/dashboard/courses',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Team',
        path: '/dashboard/courses',
        icon: <IoIcons.IoMdPeople />
    },
    {
        title: 'Messages',
        path: '/dashboard/courses',
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Message 1',
                path: '/messages/message1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Message 2',
                path: '/messages/message2',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Support',
        path: '/dashboard/courses',
        icon: <IoIcons.IoMdHelpCircle />
    }
];