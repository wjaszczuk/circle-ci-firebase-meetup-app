import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-enzyme';

describe('App', () => {
  let sut: ShallowWrapper;

  beforeEach(() => {
    sut = shallow(<App />);
  });

  it('will match snapshot', () => {
    expect(sut).toMatchSnapshot();
  });

  it('will contain image with classname app__logo', () => {
    expect(sut.find('img')).toHaveClassName('app__logo');
  });
});
