import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import styles from "./HomeView.module.css";
export default function HomeView({ data, loading }) {
  const router = useRouter();
  console.log(data);
  const handleNavigate = (id) => {
    router.push(`${id}`);
  };
  return (
    <>
      {loading ? (
        <Box>loading....</Box>
      ) : (
        <>
          <Header />
          <HeroSection />
          <Box sx={{ mt: 5 }} container>
            <Grid container justifyContent={"center"}>
              <Grid item md={9} sm={9} xs={9} sx={{ textAlign: "center" }}>
                <Typography
                  component="h1"
                  sx={{
                    color: "white",
                    fontSize: "40px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  <em>EXPLORE OUR E-BOOKS</em>
                </Typography>
                <Button className={styles.btnPay}>See All</Button>
                <Grid container>
                  {data?.map((item, index) => (
                    <Grid
                      key={index}
                      item
                      md={3}
                      sm={12}
                      xs={12}
                      onClick={() => handleNavigate(item.id)}
                      sx={{cursor:"pointer"}}
                    >
                      <Card sx={{ background: "#272727", padding: "15px" }}>
                        <Box
                          sx={{ position: "relative", marginBottom: "10px" }}
                        >
                          <Image
                            src={
                              "./images/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg"
                            }
                            alt="img"
                            width={200}
                            height={200}
                          />
                        </Box>
                        <Typography sx={{ color: "white", marginTop: "20px" }}>
                          {item.attributes.book.title}
                        </Typography>
                        <Typography sx={{ color: "white", marginTop: "10px" }}>
                          {item.attributes.currency} {item.attributes.price}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}
