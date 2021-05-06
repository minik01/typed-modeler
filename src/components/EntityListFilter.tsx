import {Button, ButtonGroup, Dropdown, DropdownButton} from "react-bootstrap";
import React from "react";
import {TranslationKey} from "../model/TranslationKey";

export function EntityListFilter(props: { modelOption: TranslationKey[], modelPath: TranslationKey[], setModelPath: any }) {

    return (
        <ButtonGroup id="entity-module-filter">
            <Button
                onClick={() => {
                    props.setModelPath([]);
                }}
                key={"root"}>
                root
            </Button>
            {
                props.modelPath.map(path => (
                        <Button
                            onClick={() => {
                                const index = props.modelPath.findIndex(value => path.id === value.id);
                                const updatedPath = props.modelPath.slice(0, index + 1);
                                props.setModelPath(updatedPath);
                            }}
                            key={path.id}>
                            {path.key}
                        </Button>
                    )
                )
            }

            {props.modelOption.length ? (<DropdownButton as={ButtonGroup} title="" id="bg-nested-dropdown">
                {props.modelOption.map((option: TranslationKey) =>
                    <Dropdown.Item
                        onClick={() => {
                            const updatedPath = JSON.parse(JSON.stringify(props.modelPath));
                            updatedPath.push(option);
                            props.setModelPath(updatedPath)
                        }
                        }
                        key={'' + (option.id)}>
                        {option.key}
                    </Dropdown.Item>
                )}

            </DropdownButton>) : null}
        </ButtonGroup>
    )
}
