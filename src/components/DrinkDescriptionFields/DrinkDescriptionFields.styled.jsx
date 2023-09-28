import { Field } from 'formik';
import styled from 'styled-components';
// import transition from '../../utils/transition';

export const PhotoContainer = styled.label`
    display: block;
    width: 335px;
    height: 320px;
`;

export const PhotoPreview = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
`;

export const PhotoField = styled(Field)`
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
`;