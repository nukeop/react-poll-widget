import React, { useState } from "react";
import { DragDropContext, DragDropContextProps, Droppable } from "react-beautiful-dnd";

import { PollStep } from "../../types";
import { StepDetailsProps } from "./StepDetails";
import StepsListItem from "./StepsListItem";
import './styles.scss';

export type StepsListProps = Pick<StepDetailsProps, 'onChangeOption' | 'onDeleteOption'> &
{
  steps?: PollStep[];
  onDragEnd: DragDropContextProps['onDragEnd'];
  onAddOption?: (stepId: string) => void;
};

const ITEM_HEIGHT = 62;

const StepsList: React.FC<StepsListProps> = ({
  steps = [],
  onDragEnd,
  onChangeOption,
  onDeleteOption,
  onAddOption
}) => {
  const [expandedStep, setExpandedStep] = useState<string | undefined>();
  return <DragDropContext
    onDragEnd={onDragEnd}
  >
    <Droppable droppableId='steps-list'>
      {
        (provided, snapshot) => (
          <div
            className='steps-list'
            style={{
              minHeight: `${ITEM_HEIGHT * steps.length}px`
            }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {steps.map((step, i) => <StepsListItem
              key={step.id}
              index={i}
              isExpanded={step.id === expandedStep}
              onExpand={() => step.id === expandedStep ? setExpandedStep(undefined) : setExpandedStep(step.id)}
              onChangeOption={onChangeOption}
              onDeleteOption={onDeleteOption}
              onAddOption={onAddOption}
              {...step}
            />)}
            {provided.placeholder}
          </div>
        )
      }
    </Droppable>
  </DragDropContext>;
}

export default StepsList;