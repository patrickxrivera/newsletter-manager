import React from 'react';

import NewsletterContainer from '../Form/Newsletter/NewsletterContainer';
import SettingsContainer from '../Form/Settings/SettingsContainer';
import { Wrapper, InnerWrapper, ContentWrapper, FormWrapper } from '../Dashboard/DashboardStyles';

const CreateLabel = () => (
  <Wrapper>
    <InnerWrapper>
      <ContentWrapper className="fade-in">
        <FormWrapper style={{ margin: '0 auto', height: '100%' }}>
          <NewsletterContainer
            title={'Add Newsletters'}
            subheading={'Submit newsletters below:'}
            listHeading={'Your Newsletters'}
            placeholder={'No newsletters added yet.'}
          />
          <SettingsContainer />
        </FormWrapper>
      </ContentWrapper>
    </InnerWrapper>
  </Wrapper>
);

export default CreateLabel;
