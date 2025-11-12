<template>
  <div class="contact-page">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-body">
            <h1 class="card-title text-primary">Kapcsolat</h1>
            <p class="card-text">Itt találod a kapcsolatfelvételi információkat.</p>
            
            <div class="row mt-4">
              <div class="col-md-6">
                <div class="contact-info">
                  <h4 class="text-secondary">Elérhetőségek</h4>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="bi bi-envelope me-2"></i>
                      <strong>Email:</strong> info@vueapp.hu
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-telephone me-2"></i>
                      <strong>Telefon:</strong> +36 1 234 5678
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-geo-alt me-2"></i>
                      <strong>Cím:</strong> 1051 Budapest, Vue utca 3.
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="col-md-6">
                <form class="contact-form">
                  <h4 class="text-secondary">Küldj üzenetet</h4>
                  <div class="mb-3">
                    <label for="name" class="form-label">Név</label>
                    <input type="text" class="form-control" id="name" placeholder="Add meg a neved">
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email cím</label>
                    <input type="email" class="form-control" id="email" placeholder="Add meg az email címed">
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Üzenet</label>
                    <textarea class="form-control" id="message" rows="3" placeholder="Írd ide az üzeneted"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Üzenet küldése</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped>
.contact-page {
  min-height: 70vh;
}

.card {
  border-radius: 10px;
}

.contact-info li {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.contact-form {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

/* Bootstrap Icons helyettesítése */
.bi::before {
  display: inline-block;
  width: 1.2em;
  text-align: center;
  font-style: normal;
  font-weight: bold;
}

.bi-envelope::before { content: "✉"; }
.bi-telephone::before { content: "📞"; }
.bi-geo-alt::before { content: "📍"; }
</style>