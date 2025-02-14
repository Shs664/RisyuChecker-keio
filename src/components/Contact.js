import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {

    return(
    
    <div class="w-50 mx-auto">
        <Form>
        <Form.Group className="mb-3" controlId="username">
        <Form.Label>ユーザー名</Form.Label>
        <Form.Control
          type="text"
          placeholder="ユーザー名を入力"
          
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>メールアドレス</Form.Label>
        <Form.Control type="email" placeholder="メールアドレスを入力" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>お問い合わせ内容</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>

      <div className="d-flex justify-content-center">
      <Button variant="success" type="submit">
        送信
      </Button>
      </div>
      
      
      
      
    </Form>
    </div>

    

  );
}

export default Contact;

