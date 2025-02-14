import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function UploaderHeader() {
  return (
    <section className="explanation upload-section text-center">
      <Container>
        {/* Header部分 */}
        <Row className="uploader-header mb-4">
          <Col>
            <h3 className="display-6 fw-bold">取得単位数抽出ツール</h3>
            <p className="explanation fs-5">
              学業成績表のPDFファイルをアップロードしてください。<br/>              
              ※慶應経済のみ対応です。
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default UploaderHeader;
