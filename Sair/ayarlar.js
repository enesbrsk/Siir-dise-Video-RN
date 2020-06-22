import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container>
          
        <Content padder>
            
          <Card>
            <CardItem header bordered>
              <Text>Şiir'dise Video</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Ad Soyad : Enes BİRİŞİK
                </Text>
              </Body>
              
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Mail : enesbrsk@hotmail.com
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Ana Sayfa da sağ üst tarafta bulunan butona tıklayıp reklam izleyerek bize destek 
                  olabilirsiniz destekleriniz için teşekkürler...
                </Text>
              </Body>
              
            </CardItem>
            <CardItem footer bordered>
              <Text>Teşekkürler :)</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}