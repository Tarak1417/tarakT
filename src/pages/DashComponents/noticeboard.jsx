import React from 'react';

const NoticeBoard = ({ eventData }) => {
    return (
        <div className="bg-neutral-900 rounded-lg pt-4 mb-4 shadow-md h-96 overflow-y-auto relative">
            <p className="text-white mb-4 border-l-4 border-blue-500 pl-2 text-2xl" gutterBottom>
                Notice Board
            </p>
            <div className="px-1 p-4">
                <div className='overflow-y-auto' >
                    {eventData.map((event, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex gap-4 justify-center items-center">
                                <div className="w-1/4 h-[60px] flex items-center justify-center text-white rounded-lg" style={{ backgroundColor: event.backgroundColor }}>
                                    <div className="w-[97%] h-[57px] flex items-center justify-center border-2 border-gray-900 rounded-lg p-0">
                                        <p className='p-1 text-gray-900 font-semibold text-center gap-0'>{event.date}</p>
                                    </div>
                                </div>
                                <div className="w-4/5">
                                    <h1 className="text-sm">{event.title}</h1>
                                    <p className="text-xs text-gray-500">{event.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NoticeBoard;
