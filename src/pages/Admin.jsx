import React, { useEffect } from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert, notification } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';
import { KeepAlive, useActivate, useUnactivate } from 'react-activation';

export default () => {
  const intl = useIntl();
  useEffect(() => {
    notification.info({
      message: '[Chart] mounted',
    });

    return () => {
      notification.error({
        message: '[Chart] unmounted',
      });
    };
  }, []);

  useActivate(() => {
    notification.success({
      message: '[Chart] activated',
    });
  });
  useUnactivate(() => {
    notification.warning({
      message: '[Chart] unactivated',
    });
  });
  return (
    <KeepAlive name="/admin/sub-page" saveScrollPosition="screen">
      <PageHeaderWrapper
        content={intl.formatMessage({
          id: 'pages.admin.subPage.title',
          defaultMessage: ' 这个页面只有 admin 权限才能查看',
        })}
      >
        <Card>
          <Alert
            message={intl.formatMessage({
              id: 'pages.welcome.alertMessage',
              defaultMessage: '更快更强的重型组件，已经发布。',
            })}
            type="success"
            showIcon
            banner
            style={{
              margin: -12,
              marginBottom: 48,
            }}
          />
          <Typography.Title
            level={2}
            style={{
              textAlign: 'center',
            }}
          >
            <SmileTwoTone /> Ant Design Pro <HeartTwoTone twoToneColor="#eb2f96" /> You
          </Typography.Title>
        </Card>
        <p
          style={{
            textAlign: 'center',
            marginTop: 24,
          }}
        >
          Want to add more pages? Please refer to{' '}
          <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
            use block
          </a>
          。
        </p>
      </PageHeaderWrapper>
    </KeepAlive>
  );
};
