import React from "react";
import { Form } from "semantic-ui-react";

import { PollStep, StepType } from "../../../types";
import WizardPanel from "../../WizardPanel";
import { StepOptions } from "../StepOptions";
import './styles.scss';

export type StepDetailsProps = {
  step: PollStep;
  onChangeOption: (optionId: string, newValue: string) => void;
  onDeleteOption: (optionId: string) => void;
  onAddOption: React.MouseEventHandler;
}

const StepDetails: React.FC<StepDetailsProps> = ({
  step,
  onChangeOption,
  onDeleteOption,
  onAddOption
}) => {
  const dropdownOptions = Object.values(StepType).map(stepType => ({
    text: stepType,
    value: stepType
  }));
  return <div className='step-details'>
    <Form>
      <WizardPanel className='step-details-panel'>
        <Form.Select
          label='Step type'
          value={step.type}
          options={dropdownOptions}
        />
        <Form.Input
          label='Title'
          value={step.title}
        />
        <Form.Input
          label='Header'
          value={step.header}
        />
        <Form.TextArea
          label='Description'
          value={step.description}
        />
        <Form.Button color='green' icon='checkmark'>Save</Form.Button>
      </WizardPanel>
      <StepOptions
        options={step.options}
        onChangeOption={onChangeOption}
        onDeleteOption={onDeleteOption}
        onAddOption={onAddOption}
      />
    </Form>
  </div>
}

export default StepDetails;