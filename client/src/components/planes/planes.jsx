import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanes } from '../../store/planes/planesSlice';
import { Spinner } from '../spinner';
import { ContentWrapper } from "../content-wrapper";
import { PlaneItem } from '../plane-item';
import styles from "./styles.module.css";

export const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);

  useEffect(() => {
    dispatch(getPlanes())
  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return <div>
      <ContentWrapper className={ styles.planesGrid }>
        { planes && planes.map(plane => <PlaneItem key={plane._id} {...plane} />) }
      </ContentWrapper>
    </div>;
}