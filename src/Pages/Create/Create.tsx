import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import api from '../../services/api';
import { setImage, setThreshHold, CreateAscii } from '../../hooks/CreateAscii';

import {
  Container,
  CreateHeader,
  Title,
  SimpleDoodle,
  Form,
  FormItem,
  ChooseImageContainer,
  ChooseImageText,
  ChooseImageInput,
  InputTreshold,
  ContentDoodle,
} from './Create.styles';

const Create = (): React.ReactElement => {
  const [nameValue, setNameValue] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [isSimpleDoodle, setIsSimpleDoodle] = useState(false);
  const [asciiArt, setAsciiArt] = useState('');
  const [rangeValue, setRangeValue] = useState(127);
  const [hasImage, setHasImage] = useState<HTMLImageElement>();

  const { t } = useTranslation();

  const handleChangeSimpleDoodle = () => {
    setIsSimpleDoodle(!isSimpleDoodle);
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = new Image();
    if (e.target.files && e.target.files[0]) {
      image.src = URL.createObjectURL(e.target.files[0]);
      image.onload = async () => {
        setImage(image);
        setHasImage(image);
        const ascii = CreateAscii();
        setAsciiArt(ascii);
      };
    }
  };

  const handleChangeThreshHold = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (hasImage) {
      setRangeValue(parseInt(e.target.value, 10));
      setThreshHold(parseInt(e.target.value, 10));

      const ascii = CreateAscii();
      setAsciiArt(ascii);
    }
  };

  const handleSubmitForm = async () => {
    const teste = await api.post('/copypastas', {
      name: nameValue,
      content: contentValue,
      date: new Date(),
    });
    console.log('teste api', teste);
  };

  return (
    <Container>
      <CreateHeader>
        <Title>{t('pages.create.title')}</Title>

        <SimpleDoodle>
          {t('pages.create.simpleDoodle')}
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked={isSimpleDoodle}
            onClick={handleChangeSimpleDoodle}
          />
        </SimpleDoodle>
      </CreateHeader>

      <Form autoComplete="off">
        <FormItem>
          <Input
            name="name"
            placeholder="Doodle's name (optional)"
            value={nameValue}
            onChange={val => setNameValue(val)}
          />
        </FormItem>
        {isSimpleDoodle ? (
          <FormItem>
            <TextArea
              name="name"
              placeholder="Doodle's content"
              value={contentValue}
              onChange={val => setContentValue(val)}
            />
          </FormItem>
        ) : (
          <>
            <FormItem>
              <ChooseImageContainer>
                <ChooseImageText htmlFor="upload">
                  Choose an Image
                </ChooseImageText>
                <ChooseImageInput
                  type="file"
                  id="upload"
                  onChange={handleChangeImage}
                />
              </ChooseImageContainer>
            </FormItem>

            <FormItem>
              <InputTreshold
                type="range"
                id="threshold"
                min="0"
                max="255"
                value={rangeValue}
                onChange={handleChangeThreshHold}
              />
            </FormItem>

            <FormItem>
              <ContentDoodle
                id="output"
                contentEditable="true"
                dangerouslySetInnerHTML={{ __html: asciiArt }}
              />
            </FormItem>
          </>
        )}

        <Button onClick={handleSubmitForm}>Create</Button>
      </Form>
    </Container>
  );
};

export default Create;
