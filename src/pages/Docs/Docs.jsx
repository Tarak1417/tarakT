import { Box, Button, Grid, IconButton, Modal, Tooltip, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import DocsCard from './DocsCard';
import CreateDocs from './CreateDocs';
import useModal from '../../hooks/useModal';
import useErrorHandler from '../../hooks/useErrorHandler';

const Docs = () => {
    const [docs, setDocs] = useState(null);
    const { modalState, openModal, closeModal } = useModal();
    const errorHandler = useErrorHandler();
    const [doc, setDoc] = useState(null);
    const [isCopying, setIsCopying] = useState(false); 

    const fetchDocs = useCallback(async () => {
        try {
            const response = await axios.get('/hr/docs');
            setDocs(response.data.docs);
        } catch (e) {
            errorHandler(e);
        }
    }, [errorHandler]);

    const editDoc = id => {
        setDoc(id);
        setIsCopying(false); // Set to false for editing
        openModal();
    };

    const copyDoc = id => {
        setDoc(id);
        setIsCopying(true); // Set to true for copying
        openModal();
    };

    useEffect(() => {
        fetchDocs();
    }, [fetchDocs]);

    return (
        <Box  sx={{ backgroundColor: 'background.main' , p:2  }}>
            <Box >
                <Grid container spacing={4} display='flex' alignItems='center' className="py-1">
                    <Grid item xs>
                        <div >
                            <h1 className="text-2xl text-neutral-500">Docs</h1>
                        </div>
                    </Grid>

                    <Grid item display='flex' alignItems='center'>
                        <Box>
                            <Button
                                variant='contained'
                                onClick={() => {
                                    setDoc(null);
                                    setIsCopying(false); // Ensure creating a new doc
                                    openModal();
                                }}>
                                Create Docs
                            </Button>
                        </Box>

                        <Box>
                            <Tooltip title='info' placement='top'>
                                <IconButton disableRipple variant='navIcon' sx={{ mr: 0, ml: 2 }}>
                                    <InfoOutlinedIcon fontSize='small' />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {docs?.map(doc => (
                <DocsCard
                    key={doc._id}
                    id={doc._id}
                    title={doc.title}
                    content={doc.content}
                    joblistings={doc.joblistings}
                    refresh={fetchDocs}
                    editDoc={editDoc}
                    copyDoc={copyDoc}
                />
            ))}
            <Modal
                sx={{
                    overflowY: 'scroll',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                open={modalState}
                onClose={closeModal}>
                <CreateDocs
                    closeModal={closeModal}
                    refresh={fetchDocs}
                    doc={doc}
                    isCopying={isCopying} 
                />
            </Modal>
        </Box>
    );
};

export default Docs;
