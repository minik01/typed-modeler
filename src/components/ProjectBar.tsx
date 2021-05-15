import {ButtonGroup, Dropdown, DropdownButton} from "react-bootstrap";
import {TranslationKey} from "../model/TranslationKey";
import React, {useEffect, useState} from "react";
import firebase from "firebase";
import {Project} from "../model/Project";
import {NewProjectModal} from "./NewProjectModal";

export function ProjectBart(props: { setProject: any  }) {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [projectsList, setProjectsList] = useState([])

    const databaseReference = firebase.database().ref('projects');


    useEffect(() => {
        databaseReference.on("value", function (snapshot) {
            const value = snapshot.val();
            console.log(value);
            setProjectsList(value);
        });
    }, []);

    return (
        <>
            <ButtonGroup>
                <DropdownButton as={ButtonGroup} title="Typed Modeler" id="bg-nested-dropdown"
                                variant={"dark"}>
                    {projectsList?.map((option: Project) =>
                        <Dropdown.Item
                            onClick={() => {
                                props.setProject(option)
                            }
                            }
                            key={'' + (option.id)}>
                            {option.id}
                        </Dropdown.Item>
                    )}
                    <Dropdown.Item
                        onClick={() => {
                            setShowModal(true);
                            // const updatedPath = JSON.parse(JSON.stringify(props.modelPath));
                            // updatedPath.push(option);
                            // props.setModelPath(updatedPath)
                        }
                        }
                        key={'+'}>
                        new project
                    </Dropdown.Item>

                </DropdownButton>
            </ButtonGroup>

            <NewProjectModal show={showModal} setShow={setShowModal}/>
        </>);
}