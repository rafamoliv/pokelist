import { useTranslation } from 'react-i18next'
import { ChildrenProps } from '../types'
import { useContext, useState } from 'react';
import { AppContext } from '@/context/AppContext';
import { useLocation, useNavigate } from 'react-router-dom';
import config from '../SystemPage.config';

/**
 * Internal pages template root
 * 
 * @param {ReactNode} children
 */

export const Root = ({ children }: ChildrenProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation('systemPagesText')

  return (
    <div>{children}</div>
  )
}
