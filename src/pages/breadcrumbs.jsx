import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import * as HI from '@hugeicons/core-free-icons';
import {
  Navbar,
  Page,
  BlockTitle,
  BlockHeader,
  Block,
  Breadcrumbs,
  BreadcrumbsItem,
  BreadcrumbsSeparator,
  BreadcrumbsCollapsed,
  Popover,
  List,
  ListItem,
  Link,
} from 'framework7-react';

export default () => {
  return (
    <Page>
      <Navbar title="Breadcrumbs" backLink="Back"></Navbar>
      <Block strong>
        <p>
          Breadcrumbs allow users to keep track and maintain awareness of their locations within the
          app or website. They should be used for large sites and apps with hierarchically arranged
          pages.
        </p>
      </Block>

      <BlockTitle>Basic</BlockTitle>
      <Block strong>
        <Breadcrumbs>
          <BreadcrumbsItem>
            <Link>Home</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem>
            <Link>Catalog</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem active>Phones</BreadcrumbsItem>
        </Breadcrumbs>
      </Block>

      <BlockTitle>Scrollable</BlockTitle>
      <BlockHeader>Breadcrumbs will be scrollable if they don't fit the screen</BlockHeader>
      <Block strong>
        <Breadcrumbs>
          <BreadcrumbsItem>
            <Link>Home</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem>
            <Link>Catalog</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem>
            <Link>Phones</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem>
            <Link>Apple</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
        </Breadcrumbs>
      </Block>

      <BlockTitle>Collapsed</BlockTitle>
      <Block strong>
        <Breadcrumbs>
          <BreadcrumbsItem>
            <Link>Home</Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsCollapsed className="popover-open" data-popover=".breadcrumbs-popover">
            <Popover className="breadcrumbs-popover" style={{ width: '120px' }}>
              <List>
                <ListItem link title="Catalog" popoverClose />
                <ListItem link title="Phones" popoverClose />
                <ListItem link title="Apple" popoverClose />
              </List>
            </Popover>
          </BreadcrumbsCollapsed>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
        </Breadcrumbs>
      </Block>

      <BlockTitle>With Icons</BlockTitle>
      <Block strong>
        <Breadcrumbs>
          <BreadcrumbsItem>
            <Link
              text="Home"
            >
              <HugeiconsIcon icon={HI.Home09Icon} size={32} primaryColor="#737361" />
            </Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem>
            <Link
              text="Catalog"
            >
              <HugeiconsIcon icon={HI.CatalogueIcon} size={32} primaryColor="#737361" />
            </Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem>
            <Link
              text="Phones"
            >
              <HugeiconsIcon icon={HI.SmartPhone01Icon} size={32} primaryColor="#737361" />
            </Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem>
            <Link text="Apple"
            >
              <HugeiconsIcon icon={HI.AppleIcon} size={32} primaryColor="#737361" />
            </Link>
          </BreadcrumbsItem>
          <BreadcrumbsSeparator />
          <BreadcrumbsItem active>iPhone 12</BreadcrumbsItem>
        </Breadcrumbs>
      </Block>
    </Page>
  );
};
