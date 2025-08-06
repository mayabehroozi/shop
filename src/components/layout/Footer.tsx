
'use client'

import { Row, Col, Space } from 'antd';
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  MailOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <>
      <style jsx>{`
        .footer {
          background-color: #f5f5f5;
          color: #54545a;
          padding: 60px 20px 100px; /* padding bottom بیشتر برای svg */
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          border-top: 1px solid #54545a33;
          position: relative;
        }
        .footer a {
          color: #aaa;
          transition: color 0.3s ease;
          margin-right: 15px;
          font-weight: 500;
        }
        .footer a:hover {
          color: #54545a;
        }
        .footer .title {
          font-weight: 700;
          font-size: 22px;
          margin-bottom: 12px;
          color: #54545a;
        }
        .footer .section {
          margin-bottom: 30px;
        }
        .footer .socials {
          margin-top: 10px;
        }
        .footer .img-container {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: #444;
          overflow: hidden;
          flex-shrink: 0;
          margin-right: 40px;
        }
        @media (min-width: 992px) {
          .footer .img-container {
            margin-left: 60px;
          }
        }
        .footer img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 768px) {
          .footer {
            padding: 40px 15px 80px;
            font-size: 14px;
          }
          .footer .img-container {
            width: 120px;
            height: 120px;
            margin-right: 20px;
            margin-left: 0;
          }
        }
        .footer-divider {
          width: 100%;
          height: 1px;
          background-color: #ccc;
          margin: 10px 0 30px;
        }
        .footer-logo {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .footer-logo svg {
          width: 66px;
          height: 66px;
          transition: transform 0.3s ease;
        }
        .footer-logo svg:hover {
          transform: scale(1.1);
        }
      `}</style>

      <footer className="footer">
        <Row justify="center" gutter={[40, 40]} align="middle">
          <Col xs={24} md={6}>
            <div className="img-container">
              <img src="/profile.jpg" alt="Maya Behroozi" />
            </div>
          </Col>

          <Col xs={24} md={18}>
            <Row gutter={[40, 40]}>
              <Col xs={24} md={12}>
                <div className="section">
                  <div className="title">About Me</div>
                  <p>
                    Hi! I’m Maya Behroozi, a passionate UX and frontend designer who loves creating beautiful and user-friendly web interfaces. I enjoy turning ideas into seamless digital experiences.
                  </p>
                  <p>Let’s connect on social media:</p>
                  <Space size="middle" className="socials">
                    <a href="https://www.linkedin.com/in/maya-behroozi-5b27a425b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <LinkedinOutlined style={{ fontSize: '24px' }} />
                    </a>
                    <a href="https://github.com/mayabehroozi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <GithubOutlined style={{ fontSize: '24px' }} />
                    </a>
                    <a href="https://instagram.com/maya_behroozi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <InstagramOutlined style={{ fontSize: '24px' }} />
                    </a>
                    <a href="mailto:mahnazbehroozi9@gmai.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                      <MailOutlined style={{ fontSize: '24px' }} />
                    </a>
                  </Space>
                </div>
              </Col>

              <Col xs={24} md={12}>
                <div className="section">
                  <div className="title">À propos de moi</div>
                  <p>
                    Bonjour ! Je suis Maya Behroozi, une designer UX et frontend passionnée, aimant créer des interfaces web belles et faciles à utiliser. J’aime transformer les idées en expériences digitales fluides.
                  </p>
                  <p>Connectons-nous sur les réseaux sociaux :</p>
                  <Space size="middle" className="socials">
                    <a href="https://www.linkedin.com/in/maya-behroozi-5b27a425b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <LinkedinOutlined style={{ fontSize: '24px' }} />
                    </a>
                    <a href="https://github.com/mayabehroozi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <GithubOutlined style={{ fontSize: '24px' }} />
                    </a>
                    <a href="https://instagram.com/maya_behroozi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <InstagramOutlined style={{ fontSize: '24px' }} />
                    </a>
                    <a href="mailto:mahnazbehroozi9@gmai.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                      <MailOutlined style={{ fontSize: '24px' }} />
                    </a>
                  </Space>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* SVG Logo */}
        <div className="footer-logo">
          <Link href="/" aria-label="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="66"
              viewBox="0 0 66 66"
              role="img"
            >
              <g fill="#AC9270" fillRule="evenodd">
                <path d="M65.895 0v65.896H0V0h65.895zm-.752.753H.753v64.39h64.39V.753zM14.117 11.145l14.781 19.039V13.843h-8.102v-2.698h10.807l-.004 43.613h-2.7V32.23L15.157 54.741H7.865l14.82-24.327-14.78-19.269h6.212zm30.991 0v2.698h-8.103v16.342L51.8 11.145h6.21L43.22 30.414l14.805 24.327h-7.32l-13.7-22.46v22.477h-2.701l-.001-43.613h10.805z" />
              </g>
            </svg>
          </Link>
        </div>
      </footer>
    </>
  );
}
