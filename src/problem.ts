import styled, {
  ThemedStyledInterface
} from 'styled-components'

type Theme = {
  color: 'red',
  background: 'blue'
}
export * from 'styled-components'


export default styled as ThemedStyledInterface<Theme>
// ^^ this line will cause linting to hang due to total-functions/no-unsafe-readonly-mutable-assignment
// it recurs through the functions
// in unsafe-assignment-rule for a very long time (tens of seconds, potentially longer)
// before finally hanging in isSignatureAssignable
// when calling
/*
  const returnTypeIsAssignable = checker.isTypeAssignableTo(
    sourceSignature.getReturnType(),
    destinationSignature.getReturnType()
  );

for some reason.
  */