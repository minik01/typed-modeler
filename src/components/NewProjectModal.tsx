import Modal from "react-bootstrap/esm/Modal";
import {Button} from "react-bootstrap";

export function NewProjectModal(props: { show: boolean, setShow: any }) {
    return (
        <Modal show={props.show}>
            <Modal.Header></Modal.Header>
            <Modal.Body></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.setShow(false)}>close</Button>
                <Button variant="primary" onClick={() => {

                    props.setShow(false)
                }}>save</Button>
            </Modal.Footer>
        </Modal>
    )
}