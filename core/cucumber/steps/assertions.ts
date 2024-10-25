import { Then, setDefaultTimeout, DataTable } from '@cucumber/cucumber';
import { Element } from '../../interactions/element';
import { timeouts } from '../../configs/timeouts';
import { memory } from '../../utils/memory';


setDefaultTimeout(timeouts.DEFAULT_WAIT);
/**
 * @Example: Then "selectedLang" element should contain "Java" text
 * {element} - name of element + 'element'
 * {reverse} - not or ''
 * {validation} - be|contain|have|equal|deep equal|have property|match
 * {string} - expected text
 */
Then(
  '{element} should{reverse} {validation} {data} text',
  { timeout: timeouts.STEP_WAIT },
  /* eslint-disable max-params */ async (
    element: Element,
    reverse: boolean,
    validation: string,
    expectedResult
  ) => {
    const actualResult = await element.actions.getText();
    expectedResult = memory.getValue(expectedResult);
    await element.expects.verifyText({
      actualResult,
      expectedResult,
      validation,
      reverse
    });
  }
);

/**
 * @Example: Then "selectedLang" element should contain "Java" text
 * {element} - element query
 * {reverse} - not or ''
 * {validation} - be|contain|have|equal|deep equal|have property|match
 * {string} - expected text
 */
Then(
  '{elementQuery} should{reverse} {validation} {data} text',
  { timeout: timeouts.STEP_WAIT },
  /* eslint-disable max-params */ async (
    element: Element,
    reverse: boolean,
    validation: string,
    expectedResult
  ) => {
    const actualResult = await element.actions.getText();
    expectedResult = memory.getValue(expectedResult);
    await element.expects.verifyText({
      actualResult,
      expectedResult,
      validation,
      reverse
    });
  }
);

