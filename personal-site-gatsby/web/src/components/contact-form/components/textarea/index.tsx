import { useField } from 'formik';

import { Text, Tooltip } from 'components';
import { Counter } from '..';
import { StyledContainer, StyledTextarea } from './styled';
import { Variants } from 'types';

type Props = {
  label: string;
  messageMaxLength: number;
  variant: Variants;
  name: string;
  id?: string;
  placeholder: string;
  rows?: number;
};

export const Textarea = (props: Props) => {
  const { label, messageMaxLength, variant, rows, ...rest } = props;
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <StyledTextarea>.
  const [field, meta] = useField(rest);
  const { value } = field;
  const { error, touched } = meta;
  const { name } = field;

  return (
    <StyledContainer>
      <Text as="label" htmlFor={name} variant={variant}>
        {label}
        <StyledTextarea
          variant={variant}
          error={error}
          touched={touched}
          rows={rows}
          {...field}
          {...rest}
        />
      </Text>
      {/* props supplied for counter to calculate how many chars remaining & provider feedback */}
      <Counter
        variant={variant}
        messageMaxLength={messageMaxLength}
        charsEntered={value.length}
      />
      {touched && error ? (
        <Tooltip variant="danger" align="start" position="top">
          {error}
        </Tooltip>
      ) : null}
    </StyledContainer>
  );
};
