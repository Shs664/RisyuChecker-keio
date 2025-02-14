import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {useRef} from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';


function Uploader() {

    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState("");
    const [files, setFiles] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
        console.log(fileName)
    }

    const handleRequest = async (fileName) => {

        if(fileName && files){
          axios.get("http://localhost:5000/generate-signed-url", {
            params: {
              fileName: fileName
            }
          })
          .then(response => {
            
            console.log(response.data.url);

            const signed_url = response.data.url;

             // 署名付きURLを使ってファイルをアップロード
             axios.put(signed_url, files, {
              headers: {
                'Content-Type': files.type,
              }
            });
            
             
          }

          
          );
        }

    }

    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];

        

        if(selectedFile){

            setFileName(selectedFile.name)

            if (!selectedFile) return;

            

            
        }

    }

    useEffect (() => {
        console.log(fileName);
        handleRequest(fileName);
        
    }, [fileName])

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if(file){
            setFileName(file.name);
            setFiles(file);
            console.log(fileName);
  
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

  return (
    <section className="explanation upload-section text-center">
      <Container>
        {/* Uploader部分 */}
        <Row className="uploader">
          <Col>
            <div onDrop={handleDrop} onDragOver={handleDragOver}>
            <Button variant="success" onClick={handleButtonClick} className="btn-custom">
              ファイルを選択
              <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{display: 'none'}}/>

            </Button>
            </div>
            <p className="explanation text-secondary fs-6 mt-1">
              またはファイルをドロップしてください
            </p>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Uploader;
