"use client";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Image from "next/image";


export default function Footer() {
  return (
    <section className="footer">
      <MDBFooter className="text-center text-lg-start text-muted">
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3 justify-content-between">
              <MDBCol md="3" lg="4" xl="3" className="mb-4">
                <Image
                  src="/images/logos/logo.svg"
                  alt="logo"
                  width={150}
                  height={150}
                />
                <p>
                  WelcomePets.org is more than just a pet adoption platform –
                  its a community driven by compassion and a shared love for
                  animals.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Adopters & Guardians</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Start a Search
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Dog Adoption
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Dashboard
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Community
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Vets</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Vet Portal
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Application
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Requirements
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  info@welcomepets.org
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a
            className="text-reset fw-bold ms-1"
            href="https://welcomepets.org/"
            target="_blank"
          >
            WelcomePets.org
          </a>
        </div>
      </MDBFooter>
    </section>
  );
}
