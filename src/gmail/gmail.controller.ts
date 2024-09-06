import { Controller, Post, Body } from '@nestjs/common';
import { GmailService } from './gmail.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { CreateGmailPdfDto } from './dto/create-gmail-pdf.dto';

@Controller('gmail')
@ApiTags('Gmail')
export class GmailController {
  constructor(private readonly gmailService: GmailService) {}

  @Post('send-email')
  async sendEmailPdf(@Body() createGmailPdfDto: CreateGmailPdfDto) {
    await this.gmailService.sendEmailWithPdf(createGmailPdfDto);
    return { message: 'Correo con PDF enviado satisfactoriamente' };
  }
}