import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';

// This is a temporary page to test MSW and PatternFly before routes are installed.

export const TempPage: React.FunctionComponent = () => {
  const [fooData, setFooData] = React.useState<Record<string, unknown>>({});

  React.useEffect(() => {
    fetch('/api/foo')
      .then((res) => res.json())
      .then((data) => setFooData(data));
  }, []);

  return (
    <>
      <PageSection>
        <Title headingLevel="h1" size="lg">
          Example page!
        </Title>
      </PageSection>
      <PageSection variant="light">
        Mock service worker test response:
        <pre>{JSON.stringify(fooData, null, 2)}</pre>
      </PageSection>
    </>
  );
};
