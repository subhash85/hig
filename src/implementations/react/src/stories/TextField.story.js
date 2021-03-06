/**
 Copyright 2016 Autodesk,Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';

import { TextField } from '../hig-react';

storiesOf('TextField', module)
  .addWithInfo('By default', ``, () => {
    return (
      <TextField
        disabled={boolean('Disabled', false)}
        instructions={text(
          'Instructions',
          'This is a controlled field. Change the value in the knobs panel.'
        )}
        label={text('Label', 'My text field')}
        name={text('Name', 'my-text-field')}
        onBlur={action('blur')}
        onChange={action('input')}
        onFocus={action('focus')}
        onInput={action('input')}
        placeholder={text('Placeholder', 'Tell me how you really feel')}
        required={text('Required', '')}
        value={text('Value', '')}
      />
    );
  })
  .addWithInfo('With an icon', ``, () => {
    const iconOptions = {
      assets: 'Assets',
      settings: 'Settings'
    };

    return (
      <TextField
        disabled={boolean('Disabled', false)}
        icon={select('Icon', iconOptions, 'assets')}
        instructions={text('Instructions', '')}
        label={text('Label', 'My text field')}
        name={text('Name', 'my-text-field')}
        onBlur={action('blur')}
        onChange={action('change')}
        onFocus={action('focus')}
        onInput={action('input')}
        placeholder={text('Placeholder', 'Tell me how you really feel')}
        required={text('Required', '')}
        value={text('Value', '')}
      />
    );
  });
