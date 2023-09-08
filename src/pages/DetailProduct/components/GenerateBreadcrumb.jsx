
import { Breadcrumb } from 'react-bootstrap';

export default function GenerateBreadcrumb(props) {
  const structureBreadcrumb = props?.structureBreadcrumb;

  return (
    <Breadcrumb>
      {structureBreadcrumb.map((item, index) => {
        if (index === structureBreadcrumb.length - 1) {
          return (
            <Breadcrumb.Item key={index} active>{item.name}</Breadcrumb.Item>
          )
        } else {
          return (
            <Breadcrumb.Item key={index} href={item.href}>{item.name}</Breadcrumb.Item>
          )
        }
      })}
    </Breadcrumb>
  )
}
