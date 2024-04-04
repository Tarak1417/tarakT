
import React from 'react';
import { Button } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditSection from './EditSections';


const EditCards = () => {


    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between md:w-full p-4">
                <div className="p-2">
                    <h1 className="text-2xl text-neutral-500">Edit/Create Job Details</h1>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <Button variant="contained">Add Details</Button>
                    <InfoOutlinedIcon />
                </div>
            </div>
            <div className="overflow-y-auto">
              <EditSection/>  
            </div>            
        </div>
    );
};

export default EditCards;
