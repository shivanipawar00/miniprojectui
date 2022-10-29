import React, { useState, useEffect }  from "react";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { CardFooter } from "reactstrap";
import FileDrop from 'react-file-drop';

function drag_and_dropFile(files){
        for(var i in files)
        {
            var file_type=files[i].type;
            var file_size=files[i].size;
            if(file_type === 'text/CSV')
            {
                console.log('CSV file');
            }
            else
            { 
                console.log('provide valid file type')   
            }                                              
        }
    }

function BulkUploadUsers()
{
    
    return (
        <>
            <FileDrop >
                onFrameDragEnter={(event) => console.log('onFrameDragEvent',event) }
                onFrameDragLeave={(event) => console.log('onFrameDragEvent',event)}
                onFrameDrop={(event) => console.log('onFrameDropEvent', event)}
                onDragOver={(event) => console.log('onDragOverEvent', event)}
                onDragLeave={(event) => console.log('onDragLeaveEvent', event)}
                onDrop={(files, event) => console.log('onDropEvent', event)}
        
            </FileDrop>
        </>
    );
}

export default BulkUploadUsers;