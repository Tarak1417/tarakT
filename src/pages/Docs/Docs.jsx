import { Box, Button, Grid, IconButton, Modal, Tooltip, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import DocsCard from './DocsCard';
import CreateDocs from './CreateDocs';
import useModal from '../../hooks/useModal';
import useErrorHandler from '../../hooks/useErrorHandler';

const Docs = () => {
    const [docs, setDocs] = useState(null);
    const { modalState, openModal, closeModal } = useModal();
    const errorHandler = useErrorHandler();
    const [doc, setDoc] = useState(null);

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
        openModal();
    };

    useEffect(() => {
        fetchDocs();
    }, [fetchDocs]);

    return (
        <Box>
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={4} display='flex' alignItems='center'>
                    <Grid item xs>
                        <Typography variant='h5'>Docs</Typography>
                    </Grid>
                    <Grid item display='flex' alignItems='center'>
                        <Box>
                            <Button
                                variant='contained'
                                onClick={() => {
                                    setDoc(null);
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
                    id={doc._id}
                    title={doc.title}
                    content={doc.content}
                    joblistings={doc.joblistings}
                    refresh={fetchDocs}
                    editDoc={editDoc}
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
                <>
                    <CreateDocs closeModal={closeModal} refresh={fetchDocs} doc={doc} />
                </>
            </Modal>
        </Box>
    );
};

export default Docs ;
