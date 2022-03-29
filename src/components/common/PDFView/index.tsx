import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Button, View, Loading } from 'src/components/common';
import { Callback } from 'src/redux/types';
import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiZoomIn,
  BiZoomOut,
  BiRotateLeft,
  BiRotateRight,
  BiDownload,
  BiX,
} from 'react-icons/bi';
import './styles.scss';

const PDFView: React.FC<Props> = ({ className, style, url, title = '', isVisible, onClose, onDownload, ...props }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    setPageNumber(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleClosePDF = () => {
    onClose();
  };

  const zoomIn = () => {
    setScale(current => current + 0.2);
  };

  const zoomOut = () => {
    setScale(current => current - 0.2);
  };

  const rotateLeft = () => {
    setRotate(current => current - 90);
  };

  const rotateRight = () => {
    setRotate(current => current + 90);
  };

  const handlePDFPrev = () => {
    if (pageNumber > 1) {
      setPageNumber(current => current - 1);
    }
  };

  const handlePDFNext = () => {
    if (pageNumber < numPages) {
      setPageNumber(current => current + 1);
    }
  };

  const disabledEventPropagation = event => {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
  };

  const pdfHeight = window.innerHeight - 50;

  return (
    isVisible && (
      <Document
        className={cn('cmp-pdf-view', className)}
        style={style}
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        options={{
          cMapUrl: 'cmaps/',
          cMapPacked: true,
        }}
        onClick={handleClosePDF}
        loading={<Loading size="normal" variant="white" loadingStyle={4} />}>
        <View
          className="cmp-pdf-view__pdf-header"
          isRow
          justify="space-between"
          align="center"
          onClick={disabledEventPropagation}>
          <span>{title}</span>
          {numPages > 1 && (
            <View className="cmp-pdf-view__pdf-page-turner" isRow align="center">
              <Button
                className="cmp-pdf-view__pdf-action-button"
                onClick={handlePDFPrev}
                variant="text"
                icon={<BiLeftArrowAlt />}
              />
              <span className="cmp-pdf-view__pdf-page-turner-page-number">{`${pageNumber} of ${numPages}`}</span>
              <Button
                className="cmp-pdf-view__pdf-action-button"
                onClick={handlePDFNext}
                variant="text"
                icon={<BiRightArrowAlt />}
              />
            </View>
          )}
          <View isRow>
            <Button className="cmp-pdf-view__pdf-action-button" onClick={zoomIn} variant="text" icon={<BiZoomIn />} />
            <Button className="cmp-pdf-view__pdf-action-button" onClick={zoomOut} variant="text" icon={<BiZoomOut />} />
            <Button
              className="cmp-pdf-view__pdf-action-button"
              onClick={rotateLeft}
              variant="text"
              icon={<BiRotateLeft />}
            />
            <Button
              className="cmp-pdf-view__pdf-action-button"
              onClick={rotateRight}
              variant="text"
              icon={<BiRotateRight />}
            />
            <Button
              className="cmp-pdf-view__pdf-action-button"
              onClick={onDownload}
              variant="text"
              icon={<BiDownload />}
            />
            <Button
              className="cmp-pdf-view__pdf-action-button"
              onClick={handleClosePDF}
              variant="text"
              icon={<BiX />}
            />
          </View>
        </View>
        <Page
          className="cmp-pdf-view__pdf-page"
          pageNumber={pageNumber}
          height={pdfHeight}
          scale={scale}
          rotate={rotate}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          onClick={disabledEventPropagation}
        />
      </Document>
    )
  );
};

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    url: string;
    title?: string;
    isVisible: boolean;
    onClose: Callback;
    onDownload: Callback;
  };

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PDFView);
