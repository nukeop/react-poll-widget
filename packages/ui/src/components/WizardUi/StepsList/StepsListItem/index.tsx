import React, { useCallback } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Icon } from "semantic-ui-react";

import { StepsListProps } from "..";
import { PollStep } from "../../../types";
import WizardPanel from "../../WizardPanel";
import StepDetails, { StepDetailsProps } from "../StepDetails";

import './styles.scss';

type StepsListItemProps = PollStep &
  Pick<StepDetailsProps, 'onChangeOption' | 'onDeleteOption'> &
{
  index: number;
  isExpanded: boolean;
  onExpand: React.MouseEventHandler;
  onAddOption: StepsListProps['onAddOption'];
};

const StepsListItem: React.FC<StepsListItemProps> = ({
  id,
  title,
  type,
  index,
  isExpanded = false,
  onExpand,
  onChangeOption,
  onDeleteOption,
  onAddOption,
  ...stepProps
}) => {

const onAdd = useCallback(() => {
  onAddOption && onAddOption(id);
}, [id, onAddOption]);

return <Draggable
  draggableId={id}
  index={index}
>
    {
      (provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className='steps-list-item'
        >
          <WizardPanel
            className='draggable-panel'
          >
            <span
              className='drag-handle'
              {...provided.dragHandleProps}
            >
              <Icon
                name='ellipsis vertical'
              />
              <Icon
                name='ellipsis vertical'
              />
            </span>
            <span className='title'>
              {title}
            </span>
            <span className='spacer' />
            <span className='type'>
              {type}
            </span>
            <Icon
              className='expand'
              name={isExpanded ? 'chevron up' : 'chevron down'}
              onClick={onExpand}
            />
          </WizardPanel>
          {
            isExpanded && <StepDetails
              step={{
                id,
                title,
                type,
                ...stepProps
              }}
              onChangeOption={onChangeOption}
              onDeleteOption={onDeleteOption}
              onAddOption={onAdd}
            />
          }
        </div>
      )
    }
  </Draggable>;
}

export default StepsListItem;