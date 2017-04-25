/* eslint-disable */
const qs = require('qs');

module.exports = {
  ['POST /api/login'](req, res) {
    setTimeout(() => {
      const body = qs.parse(req.body);

      res.json({
          token_type: 'Bearer',
          expires_in: 3155673600,
          access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ0MGY4NzBkMzg4YjEwNjc1ZmE1ZjAzY2QxMTUwMWRlMmIzNzc3YjA5MGQxMWQ2OTc4Njc1ZDFkZjlkNGRiYjFkODBhMDg3Y2MxNzUwMDU4In0.eyJhdWQiOiIyIiwianRpIjoiZDQwZjg3MGQzODhiMTA2NzVmYTVmMDNjZDExNTAxZGUyYjM3NzdiMDkwZDExZDY5Nzg2NzVkMWRmOWQ0ZGJiMWQ4MGEwODdjYzE3NTAwNTgiLCJpYXQiOjE0NzYwNzMyNTMsIm5iZiI6MTQ3NjA3MzI1MywiZXhwIjo0NjMxNzQ2ODUzLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.Pr_p_MoaHIaoMsk4P32sThJCpmpw8Md1eR0DlSVl_VB-wMC0QJmxQQ5zYGdrXPqN3wsCQfZDtAPowlf32ZsPfuyQgcp5eXObh3pvsboWlG_VSJ8gOY3pzdQ4ag-Jz2Qt1NS5Irio0zlWhuV3UcYlW8eR4hUtkjdefVTBMjITScob1hfQatWjlagFe34H9T7LOjKci9My4QLaphgnvT7wOIFOeZsT_gQB0yLLdZGAPtg5ifpwdM65XHaHr4o4FEdp99u5np9i7W_-WilspisFQrDfC7ZU3EMhAFSRvOEBdX2-161etNxIdpylqo_W14imoNHFjNLnejuSvGoxE4vjJO2u2koZkLO5P6h3PVwfcBgWFZ9RMnPSVUU1o_9aZI9jYz33DEGrSszeVpvSk7SsqPpRzXLiS_bT-UTtFg5UmkW2KDmcsBiEQ0SSLVLx6jBqFlqnUlDjXcxdQXbMPNIcxb-JwGVCuPC9oZ7uLI3Ailm9JGkm_I_WCHG2CTk7Fa5IzE7QsSAk95tedOVTO2DoUuf_tkfN2GU1HQ556-lywOJCavpP1_KnyLZkhupR81TDthNCRvTmypfSqNtr50gTnPQKQ-H23Mjqyhrc7Q0PIOK-JWE4eegf542LM4FSupBhzuKCrgyyu02OuM5hkX0TIheEerRqFY0R0GeKmL9defc',
          refresh_token: 'StZEvv9mGOrVO2yT5pL8FUz4edTPfReNGUmbCG4DmfDR3DlefIxVayWYNTJ4W0Ic54Ts/oEdgMLSG4ESTrgPsNzCogb0va2h36K+Q9IObo5ot9BBhk7Iq95Y836Wc3e2vlOScGJYykqOET+gSbassbvKCEuifIeCPwMksBidL9rnq49Lc3G8tkXLgbebu4vi9NJMSfCKXwB+s3aNJLRC+E4PudOzDsnOBRAm1fETpkXujnuU4C8yszRbI5IwJj8RHPwUWkyvAF0Z3BKUfjz7vm/llh5F2XL3kVE5Xww2KmLFCUUnv9b/A4H0hFJ9NrstPvG7TZqlIu6BDIvbkBHBcFZLTU17pnDP4GSXppxHcR3XiTS+whaqYb6JNlw+aKZdmkdGPqvV2NfJoKOXWn/ervq9FdEcXWhqVLJMZHSYEG4GoNRWBNuV8uQSS0SF7bCl+W2ImwIWigxMjTJ2Cio3Q456plCd9iEBYIY0yoXXj57KAB0Njbiqhwy8jV4OytGPTT5KcCTQNbEdy3LUSc1/f2ILQZfzn58BEWXRsv6CrzrcJXut2MUwjPUL8YFA3/8qaDjPO7jW03o9X7xUxGgb4bbGKkF3DZnjUUsSFmGxd9zW/E6+7TBFMtF0YKU5SfZrSNKUympXHM0X9lhaH2wQ6Kog4o9AFgAwM6cr8Ebjnt4=',
          user: {
            id: 1,
            name: 'wzy4072',
            email: 'wzy4072@163.com',
            phone: null,
            id_card: null,
            type: 0,
            branch: 0,
            parent_id: 0,
            created_at: '2016-10-08 12:01:08',
            updated_at: '2016-10-08 12:01:19',
          },
        });
      // if (body.username === 'wzy4072@163.com' && body.password === '123') {
      //   res.json({
      //     token_type: 'Bearer',
      //     expires_in: 3155673600,
      //     access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ0MGY4NzBkMzg4YjEwNjc1ZmE1ZjAzY2QxMTUwMWRlMmIzNzc3YjA5MGQxMWQ2OTc4Njc1ZDFkZjlkNGRiYjFkODBhMDg3Y2MxNzUwMDU4In0.eyJhdWQiOiIyIiwianRpIjoiZDQwZjg3MGQzODhiMTA2NzVmYTVmMDNjZDExNTAxZGUyYjM3NzdiMDkwZDExZDY5Nzg2NzVkMWRmOWQ0ZGJiMWQ4MGEwODdjYzE3NTAwNTgiLCJpYXQiOjE0NzYwNzMyNTMsIm5iZiI6MTQ3NjA3MzI1MywiZXhwIjo0NjMxNzQ2ODUzLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.Pr_p_MoaHIaoMsk4P32sThJCpmpw8Md1eR0DlSVl_VB-wMC0QJmxQQ5zYGdrXPqN3wsCQfZDtAPowlf32ZsPfuyQgcp5eXObh3pvsboWlG_VSJ8gOY3pzdQ4ag-Jz2Qt1NS5Irio0zlWhuV3UcYlW8eR4hUtkjdefVTBMjITScob1hfQatWjlagFe34H9T7LOjKci9My4QLaphgnvT7wOIFOeZsT_gQB0yLLdZGAPtg5ifpwdM65XHaHr4o4FEdp99u5np9i7W_-WilspisFQrDfC7ZU3EMhAFSRvOEBdX2-161etNxIdpylqo_W14imoNHFjNLnejuSvGoxE4vjJO2u2koZkLO5P6h3PVwfcBgWFZ9RMnPSVUU1o_9aZI9jYz33DEGrSszeVpvSk7SsqPpRzXLiS_bT-UTtFg5UmkW2KDmcsBiEQ0SSLVLx6jBqFlqnUlDjXcxdQXbMPNIcxb-JwGVCuPC9oZ7uLI3Ailm9JGkm_I_WCHG2CTk7Fa5IzE7QsSAk95tedOVTO2DoUuf_tkfN2GU1HQ556-lywOJCavpP1_KnyLZkhupR81TDthNCRvTmypfSqNtr50gTnPQKQ-H23Mjqyhrc7Q0PIOK-JWE4eegf542LM4FSupBhzuKCrgyyu02OuM5hkX0TIheEerRqFY0R0GeKmL9defc',
      //     refresh_token: 'StZEvv9mGOrVO2yT5pL8FUz4edTPfReNGUmbCG4DmfDR3DlefIxVayWYNTJ4W0Ic54Ts/oEdgMLSG4ESTrgPsNzCogb0va2h36K+Q9IObo5ot9BBhk7Iq95Y836Wc3e2vlOScGJYykqOET+gSbassbvKCEuifIeCPwMksBidL9rnq49Lc3G8tkXLgbebu4vi9NJMSfCKXwB+s3aNJLRC+E4PudOzDsnOBRAm1fETpkXujnuU4C8yszRbI5IwJj8RHPwUWkyvAF0Z3BKUfjz7vm/llh5F2XL3kVE5Xww2KmLFCUUnv9b/A4H0hFJ9NrstPvG7TZqlIu6BDIvbkBHBcFZLTU17pnDP4GSXppxHcR3XiTS+whaqYb6JNlw+aKZdmkdGPqvV2NfJoKOXWn/ervq9FdEcXWhqVLJMZHSYEG4GoNRWBNuV8uQSS0SF7bCl+W2ImwIWigxMjTJ2Cio3Q456plCd9iEBYIY0yoXXj57KAB0Njbiqhwy8jV4OytGPTT5KcCTQNbEdy3LUSc1/f2ILQZfzn58BEWXRsv6CrzrcJXut2MUwjPUL8YFA3/8qaDjPO7jW03o9X7xUxGgb4bbGKkF3DZnjUUsSFmGxd9zW/E6+7TBFMtF0YKU5SfZrSNKUympXHM0X9lhaH2wQ6Kog4o9AFgAwM6cr8Ebjnt4=',
      //     user: {
      //       id: 1,
      //       name: 'wzy4072',
      //       email: 'wzy4072@163.com',
      //       phone: null,
      //       id_card: null,
      //       type: 0,
      //       branch: 0,
      //       parent_id: 0,
      //       created_at: '2016-10-08 12:01:08',
      //       updated_at: '2016-10-08 12:01:19',
      //     },
      //   });
      // } else {
      //   res.status(401).json({ message: '用户名或密码错误' });
      // }
    }, 500);
  },
};
// module.exports = {
//   ['POST /api/login'](req, res) {
//     setTimeout(() => {
//       const body = qs.parse(req.body);
//       if (body.username === 'wzy4072@163.com' && body.password === '123') {
//         res.json({
//           token_type: 'Bearer',
//           expires_in: 3155673600,
//           access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ0MGY4NzBkMzg4YjEwNjc1ZmE1ZjAzY2QxMTUwMWRlMmIzNzc3YjA5MGQxMWQ2OTc4Njc1ZDFkZjlkNGRiYjFkODBhMDg3Y2MxNzUwMDU4In0.eyJhdWQiOiIyIiwianRpIjoiZDQwZjg3MGQzODhiMTA2NzVmYTVmMDNjZDExNTAxZGUyYjM3NzdiMDkwZDExZDY5Nzg2NzVkMWRmOWQ0ZGJiMWQ4MGEwODdjYzE3NTAwNTgiLCJpYXQiOjE0NzYwNzMyNTMsIm5iZiI6MTQ3NjA3MzI1MywiZXhwIjo0NjMxNzQ2ODUzLCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.Pr_p_MoaHIaoMsk4P32sThJCpmpw8Md1eR0DlSVl_VB-wMC0QJmxQQ5zYGdrXPqN3wsCQfZDtAPowlf32ZsPfuyQgcp5eXObh3pvsboWlG_VSJ8gOY3pzdQ4ag-Jz2Qt1NS5Irio0zlWhuV3UcYlW8eR4hUtkjdefVTBMjITScob1hfQatWjlagFe34H9T7LOjKci9My4QLaphgnvT7wOIFOeZsT_gQB0yLLdZGAPtg5ifpwdM65XHaHr4o4FEdp99u5np9i7W_-WilspisFQrDfC7ZU3EMhAFSRvOEBdX2-161etNxIdpylqo_W14imoNHFjNLnejuSvGoxE4vjJO2u2koZkLO5P6h3PVwfcBgWFZ9RMnPSVUU1o_9aZI9jYz33DEGrSszeVpvSk7SsqPpRzXLiS_bT-UTtFg5UmkW2KDmcsBiEQ0SSLVLx6jBqFlqnUlDjXcxdQXbMPNIcxb-JwGVCuPC9oZ7uLI3Ailm9JGkm_I_WCHG2CTk7Fa5IzE7QsSAk95tedOVTO2DoUuf_tkfN2GU1HQ556-lywOJCavpP1_KnyLZkhupR81TDthNCRvTmypfSqNtr50gTnPQKQ-H23Mjqyhrc7Q0PIOK-JWE4eegf542LM4FSupBhzuKCrgyyu02OuM5hkX0TIheEerRqFY0R0GeKmL9defc',
//           refresh_token: 'StZEvv9mGOrVO2yT5pL8FUz4edTPfReNGUmbCG4DmfDR3DlefIxVayWYNTJ4W0Ic54Ts/oEdgMLSG4ESTrgPsNzCogb0va2h36K+Q9IObo5ot9BBhk7Iq95Y836Wc3e2vlOScGJYykqOET+gSbassbvKCEuifIeCPwMksBidL9rnq49Lc3G8tkXLgbebu4vi9NJMSfCKXwB+s3aNJLRC+E4PudOzDsnOBRAm1fETpkXujnuU4C8yszRbI5IwJj8RHPwUWkyvAF0Z3BKUfjz7vm/llh5F2XL3kVE5Xww2KmLFCUUnv9b/A4H0hFJ9NrstPvG7TZqlIu6BDIvbkBHBcFZLTU17pnDP4GSXppxHcR3XiTS+whaqYb6JNlw+aKZdmkdGPqvV2NfJoKOXWn/ervq9FdEcXWhqVLJMZHSYEG4GoNRWBNuV8uQSS0SF7bCl+W2ImwIWigxMjTJ2Cio3Q456plCd9iEBYIY0yoXXj57KAB0Njbiqhwy8jV4OytGPTT5KcCTQNbEdy3LUSc1/f2ILQZfzn58BEWXRsv6CrzrcJXut2MUwjPUL8YFA3/8qaDjPO7jW03o9X7xUxGgb4bbGKkF3DZnjUUsSFmGxd9zW/E6+7TBFMtF0YKU5SfZrSNKUympXHM0X9lhaH2wQ6Kog4o9AFgAwM6cr8Ebjnt4=',
//           user: {
//             id: 1,
//             name: 'wzy4072',
//             email: 'wzy4072@163.com',
//             phone: null,
//             id_card: null,
//             type: 0,
//             branch: 0,
//             parent_id: 0,
//             created_at: '2016-10-08 12:01:08',
//             updated_at: '2016-10-08 12:01:19',
//           },
//         });
//       } else {
//         res.status(401).json({ message: '用户名或密码错误' });
//       }
//     }, 500);
//   },
// };

